const fs = require('fs').promises;

async function readFile(file) {
    try {
        const data = await fs.readFile(file, "utf-8")
        return data;
        } catch (err) {
            console.error('Error reading file: ', err);
        }
}

async function writeFile(file,content) {
    try {
        await fs.writeFile(file,content);
        console.log("File written successfully");
        } catch (err) {
            console.error('Error writing file: ', err);
        }
}

async function readWrite (){
    const content = await readFile("source.txt");
    if (content){
        writeFile("destination.txt",content);
    }
}