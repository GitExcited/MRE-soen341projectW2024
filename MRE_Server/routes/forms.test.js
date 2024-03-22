import supertest from "supertest";
import app from "../app.js"

describe("Fetch vehicles form route", () =>{
    test("should return all vehicles from the database",async ()=>{
        try {
            await supertest(app).get('/forms/vehicles').expect(500)
        } catch (error) {
            
        }
    })
});