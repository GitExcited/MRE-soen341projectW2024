import express from "express";
import bodyParser from "body-parser";

//Create server app
const app = express();
const port = 3000;

//Mount middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{

})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
  });