import fs from 'fs';
import path from 'path'
import { current } from './current.js';


export const renameFile=async (command)=>{

    const filesNames=command.substring(3,)

    const oldFilePath=filesNames.split(' ')[0]
    const newFileName=filesNames.split(' ')[1]

    const directoryPath=oldFilePath.split('/').slice(0,-1)

    const newFilePath=path.join(...directoryPath,newFileName)
    console.log(newFilePath)

    if (!fs.existsSync(oldFilePath)) {
      console.log(`Operation failed`)
    }
    else{

    await fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) throw new Error('FS operation failed');
        console.log('Rename complete');
        current()
      });
    }
}