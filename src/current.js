import { cwd } from 'node:process';

export const current=()=>{

    console.log(`You are currently in ${cwd()}\n`)
    return cwd()
}
