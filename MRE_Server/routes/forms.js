import express from "express";
import bodyParser from "body-parser";
import {verifyToken} from "./auth.js"
import dboperations from "../database/operations.js";
const formRouter = express.Router();



formRouter.post('/reservation',async (req,res)=>{
    
    const {vehicle_id, user_id, rental_start_date, rental_end_date, total_cost} = req.query;
    //check if vehicle is already reserved or not 
    //console.log(req.query)
    //console.log(vehicle_id,user_id, rental_start_date, rental_end_date, total_cost); 

    try{
        const result = await dboperations.getVehiclesByFieldValue("vehicle_id", vehicle_id)

        if (result.length > 0){
            const vehiclestatus = result[0].status;
            if(vehiclestatus === "available"){
                await createRental(vehicle_id, user_id, rental_start_date, rental_end_date, total_cost, status="reserved")
                return res.status(201).json({message: "Reservation successfully created."});
            }else{
                return res.status(400).json({message: "Error: vehicle already reserved."})
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

formRouter.post('/',(req,res)=>{
    
});

export default formRouter;