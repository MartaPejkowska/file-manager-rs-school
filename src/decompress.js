import path from 'path'
import zlib from 'zlib'
import fs from 'fs'
import { current } from './current.js'

export const decompress=async (command)=>{
    const paths= command.substring(11,)

    const fileToDecompress=paths.split(' ')[0]
    const fileName=fileToDecompress.split('/').slice(-1)

    const directoryPath=paths.split(' ')[1].split('/')
    const outputFile=path.join(...directoryPath,...fileName)

    console.log(fileToDecompress)

    if (!fs.existsSync(fileToDecompress) || !fs.existsSync(paths.split(' ')[1])) {
        console.log(`Operation failed`)
      }

    else{

    try{

        const decompress=zlib.BrotliDecompress();
        const input= fs.createReadStream(fileToDecompress);
        const output= fs.createWriteStream(outputFile);

        await input.pipe(decompress).pipe(output);
        console.log('File decompressed succesfully')
        current()
    }
    catch{
        err=>console.log(err)
    }
    }

}