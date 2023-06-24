import fs from 'fs'
import path from 'path'
import { current } from './current.js'


export const addFile=async (command)=>{

    const pathToFile=path.join(current(),command.substring(4,))

    await fs.writeFile(pathToFile,'',function (err) {
        if (err) throw new Error('FS operation failed');
        else console.log('File was created successfully');
    })
    current()
}
