import os from 'os';
import {cpus} from 'os'
import { current } from './current.js';

export const operatingSystem=(command)=>{
    try{

        if( command==='os --EOL'){
           console.log( os.EOL)
        }
        else if(command==='os --homedir'){
            console.log(os.homedir())
        }
        else if(command==='os --cpus'){
                    console.log('Amount of CPUs:',cpus().length)
                    const arrCPUs=cpus()
                    arrCPUs.map(cpu=> console.log('Model:',cpu.model,'Speed:',cpu.speed*0.001,' GHz'))
                }
        else if(command==='os --username'){
            console.log(os.userInfo().username)
        }
        else if(command==='os --architecture'){
            console.log(os.arch())
        }
        else{
            console.log('Invalid input')
        }
        current()
    }
   catch{
    err=>console.log(err)
    current()
   }
}
