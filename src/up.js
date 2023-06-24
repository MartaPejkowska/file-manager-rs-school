import { current } from "./current.js"
import { chdir} from 'node:process';

export const up=()=>{

try {
  chdir('../');
  current()
} catch (err) {
  console.error(`chdir: ${err}`);
}


}