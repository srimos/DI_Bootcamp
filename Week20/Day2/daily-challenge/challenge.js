import {greet} from "./greeting.js";
import {colourfulMessage} from "./colourful-message.js";
import {readFile} from "./files/read-files.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'file-data.txt');

async function main(){
    try {
        const name = await readFile(filePath, 'utf-8');
        colourfulMessage(greet(name))
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

main()