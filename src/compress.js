import path from 'path'
import zlib from 'zlib'
import fs from 'fs'
import { current } from './current.js'


export const compress=(command)=>{
    const paths= command.substring(9,)

    const fileToCompress=paths.split(' ')[0]
    const fileName=fileToCompress.split('/').slice(-1)

    const directoryPath=paths.split(' ')[1].split('/')
    const outputFile=path.join(...directoryPath,...fileName)

    if (!fs.existsSync(fileToCompress) ) {
        console.log(`Operation failed`)
      }

    else{

        try{

            const stream=zlib.createBrotliCompress();
            const input= fs.createReadStream(fileToCompress);
            const output= fs.createWriteStream(outputFile);

            input.pipe(stream).pipe(output);
            console.log('File compressed succesfully')

            current()
        }
        catch{
            err=>console.log(err)
        }
    }
}