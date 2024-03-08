import express from "express";
import bodyParser from "body-parser";
const formRouter = express.Router();



formRouter.post('/reservation',(req,res)=>{
    const user = req.query.username;
    
    //check if vehicle is already reserved or not 
    //if not reserved create reservation and update vehicle status
});

formRouter.post('/cancelreservation',(req,res)=>{
    
    //find reservation by id
    //delete reservation and update vehicle 
});

formRouter.post('/registervehicule',(req,res)=>{
    //Literally just create db entry
});

formRouter.post('/',(req,res)=>{
    
});

export default formRouter;