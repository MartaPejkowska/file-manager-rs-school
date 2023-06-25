import fs from 'fs'
import path from 'path'
import { current } from './current.js'

export const moveFile = async (command) => {

    const paths= command.substring(3,)

    const srcPath=paths.split(' ')[0]
    const fileName=srcPath.split('/').slice(-1)

    const directoryPath=paths.split(' ')[1].split('/')
    const destFile=path.join(...directoryPath,...fileName)

    if (!fs.existsSync(srcPath)|| !fs.existsSync(paths.split(' ')[1])) {
        console.log(`Operation failed\n`)
        current()
      }
    else{

    const inputStream = fs.createReadStream(srcPath)
    const outputStream = fs.createWriteStream(destFile)

    inputStream.pipe(outputStream)

    outputStream.on('finish', () => {
        fs.unlink(srcPath, err=>{
            if(err) throw new Error('FS operation failed')
            console.log(`File ${fileName} moved to ${destFile}`)
            current()
        })
    })
    }

    }