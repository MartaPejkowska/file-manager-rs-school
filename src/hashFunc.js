import {createHash} from 'node:crypto'
import {readFile} from 'fs/promises'
import fs from 'fs'
import { current } from './current.js'

export const hashFunc=async (command)=>{

    try{

        const pathTofile=command.substring(5,)

        if (!fs.existsSync(pathTofile)) {
            console.log(`Operation failed\n`)
            current()
          }
        else{

            const content= await readFile(pathTofile)

            const hash = createHash('sha256').update(content).digest('hex');

            console.log(hash);
            current()
        }

    }

    catch{
        err=>console.log(err)
    }


}