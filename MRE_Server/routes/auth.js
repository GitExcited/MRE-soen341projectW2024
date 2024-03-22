import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database/db.js";
import sendEmail from "../services/email.js";

const bpURLencoded = bodyParser.urlencoded({ extended: true });
const router = express.Router();

const saltRounds = 2;
const secretKey = "ballsandnuts"

// user: {
//     id: int,
//     username: string,
//     email: string,
//     password: string
// }

//modify to use with our db

export function verifyToken(req, res, next) {
    const token = req.cookies.authTokenMRE; // Extract token from cookies

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    // Verify JWT token
    try{
        let decoded = jwt.verify(token, secretKey);
        console.log(decoded)
        req.userId = decoded.userId;
        next();
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal server error' });
    }
}

router.post('/login',bpURLencoded, async (req,res)=>{
    const username = req.query.username || req.body.username;
    const password = req.query.password || req.body.password;

    //console.log(username, password);

    //check user exists
    try {
        // Query the database to find the user with the provided username and password
        const result = await db`SELECT password FROM users WHERE username = ${username}`;
        
        //if user exist then compare for password
        if (result.length > 0) {
            const pass = result[0].password;
            bcrypt.compare(password, pass, function(err, result) {
                if (result == true){
                // Create and sign JWT token
                const token = jwt.sign({ userId: username }, secretKey, { expiresIn: '1h' });

                // res.cookie("authTokenMRE", token, {
                //     httpOnly: true,
                //     expires: new Date(Date.now() + 3600000)
                // });
                // Return the token to the client
                res.status(200).json({ message: 'Login successful',  token: token});
                }
                else {
                    res.status(401).json({ message: 'Invalid username or password'});
                }
                
            });

        } else {
            //redirect to login
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }

    //compare password
    //if match send back token to user and update token in DB
})
  
router.post('/signup',bpURLencoded, async (req,res)=>{
    

    //check user exists (username and email)
    // if doesnt exist create user in DB
    
    const username = req.query.username;
    const email = req.query.email;
    const password = req.query.password;
    //check user exists
    try {
        // Query the database to find the user with the provided username and password
        const result = await db`SELECT * FROM users WHERE username = ${username}`;
        if (result.length > 0) {
            //user already exists return error
            res.status(401).json({ message: 'Username already exists' });
            return;
        }
        
        //check email
        const result2 = await db`SELECT * FROM users WHERE email = ${email}`;
        if (result2.length > 0) {
            //user already exists return error
            res.status(401).json({ message: 'Email already exists' });
            return;
        }

        bcrypt.hash(password, saltRounds, async function(err, hash) {
            //create user in db
            await db`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${hash})`;
        });
        res.status(200).json({ message: 'Signup successful' });
        
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }

  })

  router.post('/testing',verifyToken,(req,res)=>{
    res.status(200).json({message: "Testing complete"})
  })
  
  
  export default router;