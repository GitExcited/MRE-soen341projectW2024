import db from "./db.js";

/*
user: {
    username: string,
    email: string,
    password: string
}
*/


async function createUser(username, email, password) {
    try {
        await db`INSERT INTO USERS (username, email, password) VALUES (${username}, ${email}, ${password})`;
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

async function getUser(username) {
    try {
        const user = await db`SELECT * FROM USERS WHERE username = ${username}`;
        return user;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function updateUser(username, email, password) {
    try {
        await db`UPDATE USERS SET email = ${email}, password = ${password} WHERE username = ${username}`;
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

async function deleteUser(username) {
    try {
        await db`DELETE FROM USERS WHERE username = ${username}`;
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

/*
vehicle:
1	vehicle_id
2	make
3	model
4	year
5	license_plate
6	vehicle_type
7	color
8	mileage
9	status
10	rental_rate
11	branch_id
12	transmission_type
*/
async function createVehicle(make,model,year,license_plate,vehicle_type,color,mileage,status,rental_rate,branch_id,transmission_type) {
    try {
        await db`INSERT INTO vehicles (make,model,year,license_plate,vehicle_type,color,mileage,status,rental_rate,branch_id,transmission_type) VALUES (${make},${model},${year},${license_plate},${vehicle_type},${color},${mileage},${status},${rental_rate},${branch_id},${transmission_type})`;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

async function getVehiclesByVehicleId(value) {
    try {
        const vehicles = await db`SELECT * FROM vehicles WHERE vehicle_id = ${value}`;
        return vehicles;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function getAllVehicles(user_id) {
    try {
        // get all vehicles that are not owned by the user
        const vehicles = await db`SELECT * FROM vehicles WHERE vehicle_id NOT IN (SELECT vehicle_id FROM rentals WHERE user_id = ${user_id})`;
        return vehicles;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function updateVehicle(vehicle_id, make,model,year,license_plate,vehicle_type,color,mileage,status,rental_rate,branch_id,transmission_type) {
    try {
        await db`UPDATE vehicles SET make = ${make}, model = ${model}, year = ${year}, license_plate = ${license_plate}, vehicle_type = ${vehicle_type}, color = ${color}, mileage = ${mileage}, status = ${status}, rental_rate = ${rental_rate}, branch_id = ${branch_id}, transmission_type = ${transmission_type} WHERE vehicle_id = ${vehicle_id}`;
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

async function deleteVehicle(vehicle_id) {
    try {
        await db`DELETE FROM vehicles WHERE vehicle_id = ${vehicle_id}`;
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

/*
rentals:
1	rental_id
2	vehicle_id
3	user_id
4	rental_start_date
5	rental_end_date
6	total_cost
7	status
*/
async function createRental(vehicle_id, user_id, rental_start_date, rental_end_date, total_cost, status) {
    try {
        await db`INSERT INTO rentals (vehicle_id, user_id, rental_start_date, rental_end_date, total_cost, status) VALUES (${vehicle_id},${user_id},${rental_start_date},${rental_end_date},${total_cost},${status})`;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

async function getRentalsByFieldValue(field, value) {
    try {
        const rentals = await db`SELECT * FROM rentals WHERE ${field} = ${value}`;
        return rentals;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function updateRental(rental_id, vehicle_id, user_id, rental_start_date, rental_end_date, total_cost, status) {
    try {
        await db`UPDATE rentals SET vehicle_id = ${vehicle_id}, user_id = ${user_id}, rental_start_date = ${rental_start_date}, rental_end_date = ${rental_end_date}, total_cost = ${total_cost}, status = ${status} WHERE rental_id = ${rental_id}`;
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

async function deleteRental(rental_id) {
    try {
        await db`DELETE FROM rentals WHERE rental_id = ${rental_id}`;
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

async function getAllReservations(user_id) {
    try {
        const user_id_int = await db`SELECT user_id FROM users WHERE username = ${user_id}`;
        const reservations = await db`SELECT * FROM rentals WHERE user_id = ${user_id_int[0].user_id}`;
        return reservations;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default {createUser, getUser, updateUser, deleteUser, createVehicle, getVehiclesByVehicleId, updateVehicle, deleteVehicle, createRental, getRentalsByFieldValue, updateRental, deleteRental, getAllVehicles, getAllReservations};