import express from "express";
import bodyParser from "body-parser";
import router from "./routes/auth.js";
import formRouter from "./routes/forms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//Create server app
export const app = express();
const port = 3000;

//middleware
const bpURLencoded = bodyParser.urlencoded({ extended: true });
const bpJSON = bodyParser.json();

app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Then, define your routes as usual

app.use('/auth', router);
app.use('/forms', formRouter);

app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});