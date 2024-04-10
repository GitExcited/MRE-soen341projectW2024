import { PythonShell } from 'python-shell'

export async function analyzePicture (carUrl) {
  const options = {
    mode: 'text',
    // pythonPath: 'path/to/python',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './AI/',
    args: [carUrl]
  }

  try {
    const result = await new Promise((resolve, reject) => {
      PythonShell.run('car_ai.py', options).then(messages => {
        resolve(messages)
      }).catch(err => { reject(err) })
    })
    return result
  } catch (err) {
    console.log(err)
    throw Error('some shit fucked up')
  }
}
