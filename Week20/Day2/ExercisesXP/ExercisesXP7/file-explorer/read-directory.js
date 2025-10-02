const fs = require('fs').promises;

async function readDir(directoryName) {
    try {
        const files = await fs.readdir(directoryName)
        console.log("Current directory filenames:");
        files.forEach(file => {
            console.log(file);
        })
        } catch (err) {
            console.error('Error reading directory: ', err);
        }
}

readDir(__dirname)