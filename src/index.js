import readline from "readline"
import { stdin as input, stdout as output } from 'node:process';
import { ls } from './ls.js';
import { up } from './up.js';
import {current} from './current.js'
import {read} from './readFile.js'
import {cd} from './cd.js'
import {addFile} from './addFile.js'
import {renameFile} from './renameFile.js'
import { deleteFile } from './deleteFile.js';
import { copyFile } from './copyFile.js'
import { moveFile } from './moveFile.js';
import {operatingSystem} from './operatingSystem.js'
import { hashFunc } from './hashFunc.js';
import { compress } from './compress.js';
import {decompress} from './decompress.js'



const args=process.argv.slice(2)
const str=args.toString()

let username=str.substring(11,)

if(!username || username==undefined) {username='anonymous'}


console.log(`Welcome to the File Manager, ${username}!\n`)

current()

process.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, Goodbye`)
  process.exit()
})

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {

    if (input.startsWith('cat ')){read(input)}
    else if (input.startsWith('cd ')){cd(input)}
    else if (input.startsWith('add ')){addFile(input)}
    else if (input.startsWith('rn ')){renameFile(input)}
    else if (input.startsWith('cp ')){copyFile(input)}
    else if (input.startsWith('rm ')){deleteFile(input)}
    else if (input.startsWith('mv ')){moveFile(input)}
    else if (input.startsWith('os ')){operatingSystem(input)}
    else if (input.startsWith('hash ')){hashFunc(input)}
    else if (input.startsWith('compress ')){compress(input)}
    else if (input.startsWith('decompress')){decompress(input)}
    else if (input ==='ls'){ls()}
    else if (input ==='up'){up()}
    else if (input ==='.exit'){console.log(`Thank you for using File Manager, ${username}, Goodbye\n`);process.exit() }
    else {console.log('Invalid input')}

  });



