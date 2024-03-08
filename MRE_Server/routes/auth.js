import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import {jsonwebtoken as jwt} from "jsonwebtoken";

const bpURLencoded = bodyParser.urlencoded({ extended: true });
const bpJSON = bodyParser.json();
const router = express.Router();

const saltRounds = 10;

// user: {
//     id: int,
//     username: string,
//     email: string,
//     password: string
// }

//modify to use with our db

function verifyToken(req, res, next) {
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
    const username = req.body.username;
    const password = req.body.password;

    //check user exists
    try {
        // Query the database to find the user with the provided username and password
        //const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

        //if user exist then compare for password
        if (result.rows.length > 0) {
            bcrypt.compare(password, hashpass, function(err, result) {
                if (result == true){
                // Create and sign JWT token
                const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

                // Return the token to the client
                res.json({ token });
                }

                //res.status(200).json({ message: 'Login successful' });
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
  
router.post('/logout',bpURLencoded,(req,res)=>{
    //check user exists
    //compare token
    //if match wipe token from DB and client
  })
  
router.post('/signup',bpURLencoded,(req,res)=>{
    //check user exists (username and email)
    // if doesnt exist create user in DB

    const username = req.body.username;
    const password = req.body.password;
    //check user exists
    try {
        // Query the database to find the user with the provided username and password
        //const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

        if (result.rows.length > 0) {
            //user already exists return error
            res.status(401).json({ message: 'User already exists' });
        } else {
            bcrypt.hash(password, saltRounds, function(err, hash) {
                //create user in db
            });
            res.status(200).json({ message: 'Signup successful' });
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ message: 'Internal server error' });
    }

  })
  
  export {router};