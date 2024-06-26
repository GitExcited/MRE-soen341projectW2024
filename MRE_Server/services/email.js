import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const { EMAILPASS } = process.env
export async function depositEmail (email, name, operation, cardNumber) {
  const body = `<h1>Deposit ${operation}</h1>
  <p>Hi ${name},</p>
  <p>Your deposit of $500 has been ${operation} successfully from card: ${cardNumber}.</p>
  <p>Thank you for choosing Montreal Rental Enterprise.</p>
  <p>Best Regards,</p>
  <p>Montreal Rental Enterprise</p>`
  const subject = `Deposit ${operation} - ${name}`
  return await sendEmail(email, body, subject)
}
export async function sendNewUserEmail (email, name, password) {
  const body = `<h1>Welcome to Montreal Rental Enterprise</h1>
  <p>Hi ${name},</p>
  <p>Your account has been created successfully. Your password is: ${password}</p>
  <p>Thank you for choosing Montreal Rental Enterprise.</p>
  <p>Best Regards,</p>
  <p>Montreal Rental Enterprise</p>`
  const subject = `Welcome to Montreal Rental  - ${name}`
  return await sendEmail(email, body, subject)
}
export async function sendReservationEmail (email, name, reservationId, vehicleId, startDate, endDate, vehicle, branch) {
  const body = `<h1>Reservation Confirmation</h1>
  <p>Hi ${name},</p>
  <p>Your reservation has been confirmed. Your reservation ID is: ${reservationId}</p>
  <p>Vehicle ID: ${vehicleId}</p>
  <p>Start Date: ${startDate}</p>
  <p>End Date: ${endDate}</p>
  <p>Thank you for choosing Montreal Rental Enterprise.</p>
  <p>Best Regards,</p>
  <p>Montreal Rental Enterprise</p>
  <h2>Please fill out the following rental agreement:</h2>
  <pre>
  Car Rental Agreement
  Rental Agreement Number: ${reservationId}
  This Rental Agreement ('Agreement') is entered into between Montreal Rental Enterprise, located in Montreal, hereinafter referred to as the 'Rental Company,' and the individual or entity identified below, hereinafter referred to as the 'Renter':
  1. Renter's Information:
  Name: ${name}
  Address: ___________________________
  Contact Number: ___________________________
  Email Address: ${email}
  Driver's License Number: ___________________________
  2. Vehicle Information:
  Make: ${vehicle.make}
  Model: ${vehicle.model}
  Year: ${vehicle.year}
  License Plate Number: ${vehicle.license_plate}
  Vehicle Identification Number (VIN): 1034234987234
  Color: ${vehicle.color}
  3. Rental Details:
  Rental Start Date: ${startDate}
  Rental End Date: ${endDate}
  Pick-up Location: ${branch}
  Drop-off Location: ${branch}
  Rental Period: ${Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))} days
  Mileage Limit (if applicable): 1000 miles
  Rental Rate: $100 per day
  Additional Services (if any): ___________________________
  4. Rental Terms and Conditions:
  The Renter acknowledges receiving the vehicle described above in good condition and agrees to return it to the Rental Company in the same condition, subject to normal wear and tear.
  The Renter agrees to use the vehicle solely for personal or business purposes and not for any illegal activities.
  The Renter agrees to pay the Rental Company the agreed-upon rental rate for the specified rental period. Additional charges may apply for exceeding the mileage limit, late returns, fuel refueling, or other damages.
  The Renter agrees to bear all costs associated with traffic violations, tolls, and parking fines incurred during the rental period.
  The Renter acknowledges that they are responsible for any loss or damage to the vehicle, including theft, vandalism, accidents, or negligence, and agrees to reimburse the Rental Company for all repair or replacement costs.
  The Renter agrees to return the vehicle to the designated drop-off location at the agreed-upon date and time. Failure to do so may result in additional charges.
  The Rental Company reserves the right to terminate this agreement and repossess the vehicle without prior notice if the Renter breaches any terms or conditions of this agreement.
  The Renter acknowledges receiving and reviewing a copy of the vehicle's insurance coverage and agrees to comply with all insurance requirements during the rental period.
  5. Indemnification:
  The Renter agrees to indemnify and hold harmless the Rental Company, its employees, agents, and affiliates from any claims, liabilities, damages, or expenses arising out of or related to the Renter's use of the vehicle.
  6. Governing Law:
  This Agreement shall be governed by and construed in accordance with the laws of Quebec. Any disputes arising under or related to this Agreement shall be resolved exclusively by the courts of Quebec.
  7. Entire Agreement:
  This Agreement constitutes the entire understanding between the parties concerning the subject matter hereof and supersedes all prior agreements and understandings, whether written or oral.
  8. Signatures:
  The parties hereto have executed this Agreement as of the date first written above.
  Rental Company:
  Signature: Montreal Rental Enterprise
  Print Name: Montreal Rental Enterprise
  Date: ${new Date().toDateString()}
  Renter:
  Signature: ___________________________
  Print Name: ${name}
  Date: ${new Date().toDateString()}
  </pre>`
  const subject = `Reservation Confirmation - ${name}`
  return await sendEmail(email, body, subject)
}
async function sendEmail (emailTo, body, subject) {
  const config = {
    service: 'gmail',
    auth: {
      user: 'montrealrentalenterprise@gmail.com',
      pass: EMAILPASS
    }
  }
  const transporter = nodemailer.createTransport(config)
  if (!emailTo) {
    return ['Failure', { msg: 'Email address is missing from the request.', error: 'Email address is missing from the request.' }]
  }
  const message = {
    from: 'montrealrentalenterprise@gmail.com',
    to: emailTo,
    subject,
    html: body
  }
  let response = []
  try {
    const info = await transporter.sendMail(message)
    response = ['Success', {
      msg: 'Email sent',
      info: info.messageId,
      preview: nodemailer.getTestMessageUrl(info)
    }]
  } catch (error) {
    response = ['Failure', { msg: 'Failed to send email', error: error.message }]
  }
  return response
};
export default { sendNewUserEmail, sendReservationEmail, depositEmail }
