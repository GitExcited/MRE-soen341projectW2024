import express from "express";
import bodyParser from "body-parser";

//Create server app
const app = express();
const port = 3000;


//middleware
const bpURLencoded = bodyParser.urlencoded({ extended: true });
const bpJSON = bodyParser.json();
const authRouter = require('./routes/auth');

app.use('/', authRouter);

app.get('/',(req,res)=>{

})




app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
  });