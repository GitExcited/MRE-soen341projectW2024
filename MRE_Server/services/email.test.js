import { describe, expect, test, jest } from '@jest/globals'
import { depositEmail } from './email.js'
import nodemailer from 'nodemailer'

jest.mock('nodemailer')

describe('Email Service', () => {
  test('should send deposit email successfully', async () => {
    nodemailer.createTransport.mockReturnValue({
      sendMail: jest.fn().mockResolvedValue({})
    })

    // Define test data
    const email = 'test@example.com'
    const name = 'John Doe'
    const operation = 'Deposit'
    const cardNumber = '1234 5678 9012 3456'

    const result = await depositEmail(email, name, operation, cardNumber)

    // Assertions
    expect(result[0]).toBe('Success')
    expect(result[1].msg).toBe('Email sent')
    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      service: 'gmail',
      auth: {
        user: 'montrealrentalenterprise@gmail.com',
        pass: process.env.EMAILPASS
      }
    })
  })
})
