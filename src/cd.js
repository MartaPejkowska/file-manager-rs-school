import { current } from "./current.js"
import { chdir} from 'node:process';
import fs from 'fs'

export const cd=(path)=>{
    const finalPath=path.substring(3,)

    if (!fs.existsSync(finalPath)) {
      console.log(`Operation failed\n`)
        current()
    }
    else{

      try {
        chdir(finalPath);
        current()
      }
      catch (err) {
        console.error(`chdir: ${err}`);
        current()
      }

    }
}