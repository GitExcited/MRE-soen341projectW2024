import {PythonShell} from 'python-shell';

export async function analyzePicture(car_url){
    let options = {
        mode: 'text',
        //pythonPath: 'path/to/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: './AI/',
        args: [car_url]
    };

    try {
        const result = await new Promise((resolve, reject) => {
                        //console.log("callback reached");
                        PythonShell.run('car_ai.py', options).then(messages=>{
                            console.log(messages);
                            resolve(messages);
                        });})
        //let result = PythonShell.run('car_ai.py', options);
        return result;
    } catch (error) {
        console.log(error);
    }
}