import fs from 'fs'
import { current } from './current.js'

const arrFiles=[]
const table=[]
export const ls =() =>{
    try{

        fs.readdir(current(),{withFileTypes:true}, (err,files)=>{

        if(err)console.log(err)

        arrFiles.push(files)

        files.map(file=>
           {let type=''
            type= file.isFile() ? 'file' : file.isDirectory()?'Directory': file.isSymbolicLink()? 'Symbolic Link' : 'other'
            table.push({Name:file.name, Type:type})
           } )

        console.table(table)
        current()
    })
    }
    catch{
        err=>console.log(err)
    }

}

