import { describe, expect, test, afterAll } from '@jest/globals'
import request from 'supertest'
import express from 'express'
import formRouter from './forms'
import db from '../database/db'
const app = express()
app.use('/forms', formRouter)
describe('Get /forms/vehicles endpoint', () => {
  test('should return all vehicles', async () => {
    const response = await request(app).get('/forms/vehicles')
      .query({
        user_id: '11111111'
      })
    expect(response.statusCode).toBe(200)
  })
  afterAll(async () => {
    await db.end()
  })
})
