const {fs,readFile,writeFile} = require("./fileManager.js")

readFile("HelloWorld.txt")
writeFile("ByeWorld.txt","Writing to the file")