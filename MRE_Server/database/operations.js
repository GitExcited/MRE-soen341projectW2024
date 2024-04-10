import db from './db.js'
/*
user: {
    username: string,
    email: string,
    password: string
}
*/
async function createUser (username, email, password) {
  try {
    await db`INSERT INTO USERS (username, email, password) VALUES (${username}, ${email}, ${password})`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
async function getUser (username) {
  try {
    const user = await db`SELECT * FROM USERS WHERE username = ${username}`
    return user
  } catch (err) {
    console.log(err)
    return false
  }
}
async function updateUser (username, email, password) {
  try {
    await db`UPDATE USERS SET email = ${email}, password = ${password} WHERE username = ${username}`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
async function deleteUser (username) {
  try {
    await db`DELETE FROM USERS WHERE username = ${username}`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
/*
vehicle:
1 vehicle_id
2 make
3 model
4 year
5 license_plate
6 vehicle_type
7 color
8 mileage
9 status
10 rental_rate
11 branch_id
12 transmission_type
*/
async function createVehicle (make, model, year, licensePlate, vehicleType, color, mileage, status, rentalRate, branchId, transmissionType) {
  try {
    await db`INSERT INTO vehicles (make,model,year,license_plate,vehicle_type,color,mileage,status,rental_rate,branch_id,transmission_type) VALUES (${make},${model},${year},${licensePlate},${vehicleType},${color},${mileage},${status},${rentalRate},${branchId},${transmissionType})`
  } catch (err) {
    console.log(err)
    return false
  }
}
async function getVehiclesByVehicleId (value) {
  try {
    const vehicles = await db`SELECT * FROM vehicles WHERE vehicle_id = ${value}`
    return vehicles
  } catch (err) {
    console.log(err)
    return false
  }
}
async function getAllVehicles (userId) {
  try {
    // get all vehicles that are not owned by the user
    const vehicles = await db`SELECT * FROM vehicles WHERE vehicle_id NOT IN (SELECT vehicle_id FROM rentals WHERE user_id = ${userId})`
    return vehicles
  } catch (err) {
    console.log(err)
    return false
  }
}
async function updateVehicle (vehicleId, make, model, year, licensePlate, vehicleType, color, mileage, status, rentalRate, branchId, transmissionType) {
  try {
    await db`UPDATE vehicles SET make = ${make}, model = ${model}, year = ${year}, license_plate = ${licensePlate}, vehicle_type = ${vehicleType}, color = ${color}, mileage = ${mileage}, status = ${status}, rental_rate = ${rentalRate}, branch_id = ${branchId}, transmission_type = ${transmissionType} WHERE vehicle_id = ${vehicleId}`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
async function deleteVehicle (vehicleId) {
  try {
    await db`DELETE FROM vehicles WHERE vehicle_id = ${vehicleId}`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
/*
rentals:
1 rental_id
2 vehicle_id
3 user_id
4 rental_start_date
5 rental_end_date
6 total_cost
7 status
*/
async function createRental (vehicleId, userId, rentalStartDate, rentalEndDate, totalCost, status) {
  try {
    const res = await db`INSERT INTO rentals (vehicle_id, user_id, rental_start_date, rental_end_date, total_cost, status) VALUES (${vehicleId},${userId},${rentalStartDate},${rentalEndDate},${totalCost},${status}) RETURNING rental_id`
    return res[0].rental_id || false
  } catch (err) {
    console.log(err)
    return false
  }
}
async function getRentalsById (value) {
  try {
    const rentals = await db`SELECT * FROM rentals WHERE rental_id = ${value}`
    console.log(rentals)
    return rentals
  } catch (err) {
    console.log(err)
    return false
  }
}
async function updateRental (rentalId, rentalStartDate, rentalEndDate) {
  try {
    await db`UPDATE rentals SET rental_start_date = ${rentalStartDate}, rental_end_date = ${rentalEndDate} WHERE rental_id = ${rentalId}`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
async function deleteRental (rentalId) {
  try {
    await db`DELETE FROM rentals WHERE rental_id = ${rentalId}`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
async function getAllReservations (userId) {
  try {
    const userIdInt = await db`SELECT user_id FROM users WHERE username = ${userId}`
    const reservations = await db`SELECT * FROM rentals WHERE user_id = ${userIdInt[0].user_id}`
    return reservations
  } catch (err) {
    console.log(err)
    return false
  }
}
async function updateReservationStatus (rentalId, status) {
  try {
    await db`UPDATE rentals SET status = ${status} WHERE rental_id = ${rentalId}`
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}
export default { createUser, getUser, updateUser, deleteUser, createVehicle, getVehiclesByVehicleId, updateVehicle, deleteVehicle, createRental, getRentalsById, updateRental, deleteRental, getAllVehicles, getAllReservations, updateReservationStatus }
