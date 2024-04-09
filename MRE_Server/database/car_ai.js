// import {spawn} from "child_process";

// export async function analyzePicture(car_url){
//     try {
//         const pythonProcess = spawn('python',["../AI/car_ai.py", car_url]);
//         // pythonProcess.stdout.on('data', (data) => {
//         //     // Do something with the data returned from python script
//         //    });
//         console.log("thread spawned now waiting : ", car_url);
//         const result = await new Promise((resolve, reject) => {
//             console.log("callback reached");
//             pythonProcess.stdout.on('data', (data) => {
//                 resolve(data);
//             });
//         });
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

import {PythonShell} from 'python-shell';

export async function analyzePicture(car_url){
    let options = {
        mode: 'text',
        //pythonPath: 'path/to/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: './AI/',
        args: [car_url]
    };

    PythonShell.run('car_ai.py', options).then(messages=>{
  // results is an array consisting of messages collected during execution
    console.log('results: %j', messages);
    });
}