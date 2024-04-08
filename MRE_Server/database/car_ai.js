import spawn from "child_process";

export async function analyzePicture(car_url){
    try {
        const pythonProcess = await spawn('python',["../AI/car_ai.py", car_url]);
        pythonProcess.stdout.on('data', (data) => {
            // Do something with the data returned from python script
           });
        const result = await new Promise((resolve, reject) => {
            pythonProcess.stdout.on('data', () => {
                resolve(data);
            });
        });
        return data;
    } catch (error) {
        console.log(err);
    }
}