import express from 'express'
import { verifyToken } from './auth.js'
import dboperations from '../database/operations.js'
import { sendReservationEmail, depositEmail } from '../services/email.js'
import { analyzePicture } from '../database/car_ai.js'
const formRouter = express.Router()
// GET routes
formRouter.get('/vehicles', async (req, res) => {
  // get all vehicles
  try {
    const vehicles = await dboperations.getAllVehicles(req.query.user_id)
    return res.status(200).json(vehicles)
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
formRouter.get('/getallreservations', verifyToken, async (req, res) => {
  // get all reservations
  try {
    const userId = req.userId
    const reservations = await dboperations.getAllReservations(userId)
    if (reservations) { return res.status(200).json(reservations) } else { return res.status(500).json({ message: 'Internal server error' }) }
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
formRouter.get('/getreservation', async (req, res) => {
  // get reservation by id
  const rentalId = req.query.rental_id
  try {
    const reservation = await dboperations.getRentalsById(rentalId)
    if (reservation) { return res.status(200).json(reservation[0]) } else { return res.status(500).json({ message: 'Internal server error' }) }
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
// POST routes
formRouter.post('/updatereservation', async (req, res) => {
  // update reservation by id
  const rentalId = req.query.rental_id
  const rentalStartDate = req.query.rental_start_date
  const rentalEndDate = req.query.rental_end_date
  try {
    await dboperations.updateRental(rentalId, rentalStartDate, rentalEndDate)
    return res.status(200).json({ message: 'Reservation updated successfully.' })
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
formRouter.post('/reservation', verifyToken, async (req, res) => {
  const { vehicle_id: vehicleId, start_date: startDate, end_date: endDate } = req.body
  const userId = req.userId
  console.log(vehicleId, startDate, endDate, userId)
  try {
    const result = await dboperations.getVehiclesByVehicleId(vehicleId)
    const totalCost = (Date.parse(endDate) - Date.parse(startDate)) / 86400000 * 100
    if (result.length > 0) {
      const vehiclestatus = result[0].status
      if (vehiclestatus === 'Available') {
        const user = await dboperations.getUser(userId)
        const userIdInt = user[0].user_id
        console.log(user)
        const rentalId = await dboperations.createRental(vehicleId, userIdInt, startDate, endDate, totalCost, 'reserved')
        console.log('result', result)
        await sendReservationEmail(user[0].email, user[0].username, rentalId, vehicleId, startDate, endDate, { make: result[0].make, model: result[0].model, year: result[0].year, license_plate: result[0].license_plate, color: result[0].color }, result[0].branch)
        return res.status(201).json({ message: 'Reservation successfully created.' })
      } else {
        return res.status(400).json({ message: 'Error: vehicle already reserved.' })
      }
    } else {
      return res.status(400).json({ message: 'Error: vehicle does not exist.' })
    }
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
formRouter.post('/cancelreservation', async (req, res) => {
  // find reservation by id
  // delete reservation and update vehicle
  const rentalId = req.query.rental_id
  try {
    await dboperations.deleteRental(rentalId)
    return res.status(200).json({ message: 'Reservation canceled successfully.' })
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
formRouter.post('/registervehicle', async (req, res) => {
  // Literally just create db entry
  const { make, model, year, license_plate: licensePlate, vehicle_type: vehicleType, color, mileage, status, rental_rate: rentalRate, branch_id: branchId, transmission_type: transmissionType } = req.query
  try {
    await dboperations.createVehicle(make, model, year, licensePlate, vehicleType, color, mileage, status, rentalRate, branchId, transmissionType)
    return res.status(201).json({ message: 'Vehicle successfully registered.' })
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
formRouter.post('/checkin', verifyToken, async (req, res) => {
  const { bookingID, creditCard } = req.body
  // const user_id = req.userId
  console.log(bookingID)
  try {
    await dboperations.updateReservationStatus(bookingID, 'checked in')
    const user = await dboperations.getUser(req.userId)
    const email = user[0].email
    await depositEmail(email, req.userId, 'received', creditCard)
    return res.status(201).json({ message: 'Vehicle checked in.' })
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

formRouter.post('/checkout', verifyToken, async (req, res) => {
  const { cardNumber, rental_id: rentalId } = req.body

  try {
    await dboperations.updateReservationStatus(rentalId, 'checked out')
    const user = await dboperations.getUser(req.userId)
    const email = user[0].email
    await depositEmail(email, req.userId, 'returned', cardNumber)
    return res.status(201).json({ message: 'Vehicle checked out.' })
  } catch (err) {
    console.error('Error executing query', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
formRouter.post('/caranalysis', async (req, res) => {
  // extract car picture url
  const carUrl = req.query.car_url
  if (carUrl) {
    try {
      const caranalysis = await analyzePicture(carUrl)
      const lastIndex = caranalysis[0].lastIndexOf('\r')
      const extractedText = caranalysis[0].substring(lastIndex + 1)
      return res.status(200).json({ message: extractedText })
    } catch (error) {
      console.error('Error running script', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }
})
export default formRouter
