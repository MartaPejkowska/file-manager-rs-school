import fs from 'fs'
import { current } from './current.js'

export const deleteFile=(command)=>{

    const pathFile=command.substring(3,)

    if (!fs.existsSync(pathFile)) {
        console.log(`Operation failed`)
        current()
      }

    else{

    fs.unlink(pathFile, err=>{
        if(err) throw new Error('Operation failed')
        console.log('File removed')
        current()
    })
    }
}