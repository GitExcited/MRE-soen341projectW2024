import express from "express";
import {verifyToken} from "./auth.js";
import dboperations from "../database/operations.js";
import { sendReservationEmail } from "../services/email.js";
const formRouter = express.Router();

//GET routes

formRouter.get('/vehicles',async (req,res)=>{
    //get all vehicles
    try{
        const vehicles = await dboperations.getAllVehicles(req.query.user_id);
        return res.status(200).json(vehicles);
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error'});
    }
});


formRouter.get('/getallreservations', verifyToken, async (req,res)=>{
    //get all reservations
    try{
        const user_id = req.userId;
        const reservations = await dboperations.getAllReservations(user_id);
        if(reservations)
            return res.status(200).json(reservations);
        else
            return res.status(500).json({ message: 'Internal server error' });
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

formRouter.get('/getreservation', async (req,res)=>{
    //get reservation by id
    const rental_id = req.query.rental_id;
    try{
        const reservation = await dboperations.getRentalsById(rental_id);
        if(reservation)
            return res.status(200).json(reservation[0]);
        else
            return res.status(500).json({ message: 'Internal server error' });
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//POST routes

formRouter.post('/updatereservation', async (req,res)=>{
    //update reservation by id
    const rental_id = req.query.rental_id;
    const rental_start_date = req.query.rental_start_date;
    const rental_end_date = req.query.rental_end_date;
    try{
        await dboperations.updateRental(rental_id, rental_start_date, rental_end_date);
        return res.status(200).json({message: "Reservation updated successfully."});
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


formRouter.post('/reservation', verifyToken, async (req,res)=>{
    const {vehicle_id, start_date, end_date} = req.body;
    const user_id = req.userId;
    console.log(vehicle_id, start_date, end_date, user_id);

    try{
        const result = await dboperations.getVehiclesByVehicleId(vehicle_id)

        const total_cost = (Date.parse(end_date) - Date.parse(start_date)) / 86400000 * 100;
        if (result.length > 0){
            const vehiclestatus = result[0].status;
            if(vehiclestatus === "Available"){
                const user = await dboperations.getUser(user_id);
                const user_id_int = user[0].user_id;
                console.log(user);
                const rental_id = await dboperations.createRental(vehicle_id, user_id_int, start_date, end_date, total_cost, "reserved");

                console.log("result", result);
                
                await sendReservationEmail(user[0].email, user[0].username, rental_id, vehicle_id, start_date, end_date, {make: result[0].make, model: result[0].model, year: result[0].year, license_plate: result[0].license_plate, color: result[0].color}, result[0].branch );
                return res.status(201).json({message: "Reservation successfully created."});
            }else{
                return res.status(400).json({message: "Error: vehicle already reserved."});
            }
        }else{
            return res.status(400).json({message: "Error: vehicle does not exist."});
        }
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

formRouter.post('/cancelreservation', async (req,res)=>{
    
    //find reservation by id
    //delete reservation and update vehicle 
    const rental_id = req.query.rental_id;
    try{
        await dboperations.deleteRental(rental_id);
        return res.status(200).json({message: "Reservation canceled successfully."});
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
    
});

formRouter.post('/registervehicle',async (req,res)=>{
    
    //Literally just create db entry
    const {make,model,year,license_plate,vehicle_type,color,mileage,status,rental_rate,branch_id,transmission_type} = req.query;

    try{
        await dboperations.createVehicle(make,model,year,license_plate,vehicle_type,color,mileage,status,rental_rate,branch_id,transmission_type);
        return res.status(201).json({message: "Vehicle successfully registered."});
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

formRouter.post('/checkin',verifyToken,async (req,res)=>{
    const {bookingID,driverLicense,creditCard,vehicleInspectionReport,signedFormImage} = req.body;
    //const user_id = req.userId;
    console.log(bookingID);
    try {
        await dboperations.updateReservationStatus(bookingID,"checked in");
        return res.status(201).json({message: "Vehicle checked in."});
    } catch (error) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//status = one of ["reserved", "checked in", "checked out"]

formRouter.post('/checkout',verifyToken,async (req,res)=>{
    const {cardNumber,expiryDate,cvv,rental_id} = req.body;
    //const user_id = req.userId;
    try {
        await dboperations.updateReservationStatus(rental_id,"checked out");
        return res.status(201).json({message: "Vehicle checked out."});
    } catch (error) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// formRouter.post('/mailtest',async (req,res)=>{
//     const {email_to, body, subject} = req.query;
//     //console.log(email_to, body, subject)
//     const response = await sendEmail(email_to, body, subject);
//     //console.log(response)

//     if(response[0]=="Success"){
//         res.status(201).json({message: 'Email sent successfully.',info:response[1]});
//     }else if(response[0]=="Failure"){
//         res.status(500).json({message: 'Error occured while trying to send email.', info:response[1]});
//     }
    
// });

export default formRouter;