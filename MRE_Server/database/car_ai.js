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
        const result = await new Promise((resolve, _) => {
                        PythonShell.run('car_ai.py', options).then(messages=>{
                            resolve(messages);
                        });})
        return result;
    } catch (error) {
        console.log(error);
        throw "some shit fucked up";
    }
}