import {spawn} from "child_process";

export async function analyzePicture(car_url){
    try {
        const pythonProcess = spawn('python',["../AI/car_ai.py", car_url]);
        // pythonProcess.stdout.on('data', (data) => {
        //     // Do something with the data returned from python script
        //    });
        console.log("thread spawned now waiting : ", car_url);
        const result = await new Promise((resolve, reject) => {
            pythonProcess.stdout.on('data', (data) => {
                resolve(data);
            });
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}