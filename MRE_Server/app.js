import express from "express";
import bodyParser from "body-parser";
import router from "./routes/auth.js";
import formRouter from "./routes/forms.js";

//Create server app
const app = express();
const port = 3000;


//middleware
const bpURLencoded = bodyParser.urlencoded({ extended: true });
const bpJSON = bodyParser.json();

app.use('/auth', router);
app.use('/form', formRouter);

app.get('/',(req,res)=>{
  res.send('Hello World');
})




app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});