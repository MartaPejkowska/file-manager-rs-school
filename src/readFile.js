import fs from 'fs'
import { current } from './current.js'

export const read=(command)=>{

    const pathFile=command.substring(4,)

    if (!fs.existsSync(pathFile)) {
        console.log(`Operation failed`)
      }
    else{

    const readableStream = fs.createReadStream(pathFile,'utf8');

    readableStream.on('error', function (error) {
        console.log(`Operation failed, ${error.message}`);
        current()
    })

    readableStream.on('data', (chunk) => {
        console.log(chunk);
        current()
    })

    }
}
