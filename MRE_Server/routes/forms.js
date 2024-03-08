import express from "express";
import bodyParser from "body-parser";
import {verifyToken} from "./auth.js"
import * as dboperations from "../database/operations.js";
const formRouter = express.Router();



formRouter.post('/reservation',async (req,res)=>{
    
    const {vehicle_id, user_id, rental_start_date, rental_end_date, total_cost, status} = req.query;
    //check if vehicle is already reserved or not 

    try{
    const result = await getVehiclesByFieldValue("vehicle_id", vehicle_id)
    const vehiclestatus = result[0].status;

    if(vehiclestatus === "available"){
        await createRental(vehicle_id, user_id, rental_start_date, rental_end_date, total_cost, status)
        return res.status(201).json({message: "Reservation successfully created."});
    }else{
        return res.status(400).json({message: "Error: vehicle already reserved."})
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

formRouter.post('/',(req,res)=>{
    
});

export default formRouter;