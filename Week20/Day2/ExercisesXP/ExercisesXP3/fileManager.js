const fs = require('fs');

function readFile(file) {
    fs.readFile(file, "utf-8", (err,data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
        console.log('File content:', data);
    });
}

function writeFile(file,content) {
    fs.writeFile(file,content,(err)=>{
        if (err) {
            console.error('Error writing file: ', err);
            return;
        }
    console.log("File written successfully");
    })
}

module.exports = {fs,readFile,writeFile}