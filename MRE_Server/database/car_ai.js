import { ChildProcess } from "child_process";

function analyzePicture(){
    const pythonProcess = spawn('python',["./car_ai.py", arg1, arg2]);
    pythonProcess.stdout.on('data', (data) => {
        // Do something with the data returned from python script
       });
}