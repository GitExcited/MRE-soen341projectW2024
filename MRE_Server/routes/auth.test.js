import {describe, expect, test} from '@jest/globals';
import request from 'supertest';
import express from "express";
import router from './auth';
import db from "../database/db";

const app = express();
app.use("/auth",router);

describe("Post /auth/login endpoint", () =>{
    test("should return valid jwt token", async ()=>{
        const response = await request(app).post("/auth/login")
                        .query({
                            username: "test",
                            password: "test"
                        });

        const responseBody = JSON.parse(response.text);
        expect(responseBody.message).toBe('Login successful');
        expect(response.statusCode).toBe(200);
    })
    afterAll(async () => {
        await db.end();
    });  
})

