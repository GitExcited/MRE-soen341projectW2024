import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jsonwebtoken = jwt;
import db from "../database/db.js";

const bpURLencoded = bodyParser.urlencoded({ extended: true });
const bpJSON = bodyParser.json();
const router = express.Router();

const saltRounds = 2;

// user: {
//     id: int,
//     username: string,
//     email: string,
//     password: string
// }

//modify to use with our db

export function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        // Store decoded token payload in request object for further use
        req.userId = decoded.userId;
        next();
    });
}

router.post('/login',bpURLencoded, async (req,res)=>{
    const username = req.query.username;
    const password = req.query.password;

    console.log(username, password);

    //check user exists
    try {
        // Query the database to find the user with the provided username and password
        const result = await db`SELECT password FROM users WHERE username = ${username}`;
        const pass = result[0].password;
        
        //if user exist then compare for password
        if (result.length > 0) {
            bcrypt.compare(password, pass, function(err, result) {
                if (result == true){
                // Create and sign JWT token
                const token = jwt.sign({ userId: username }, "so private wow", { expiresIn: '1h' });

                // Return the token to the client
                res.status(200).json({ message: 'Login successful', token: token});
                }
                else {
                    res.status(401).json({ message: 'Invalid username or password' });
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
            res.status(401).json({ message: 'User already exists' });
        } else {
            bcrypt.hash(password, saltRounds, async function(err, hash) {
                //create user in db
                await db`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${hash})`;
            });
            res.status(200).json({ message: 'Signup successful' });
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }

  })
  
  
  export default router;