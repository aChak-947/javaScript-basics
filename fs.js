const fs = require('fs')
const path = require('path')

//reading from a file
// let content = fs.readFileSync('f1.txt')
// console.log('This is f1 data -> ' + content)

//writing to a file
//fs.writeFileSync('f2.txt', 'Hello from f2')

//append to a file
//fs.appendFileSync('f2.txt', ' This is f2 data.')

//delete a file
// fs.unlinkSync('f2.txt')
// console.log('File Removed')

//create a directory
//fs.mkdirSync('myDirectory')

//delete a directory
//fs.rmdirSync('myDirectory')

//let doesExist = fs.existsSync('myDirectory')
//console.log(doesExistInDirectory)

// let folderPath = '/Users/avronilchakraborty/Dev/automation/myDirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log('directory content' + folderContent)

let srcFilePath = '/Users/avronilchakraborty/Dev/automation/myDirectory/f3.txt'
let destFolder = '/Users/avronilchakraborty/Dev/automation/myDirectory4/'

let toBeCopiedFileName = path.basename(srcFilePath)
console.log(toBeCopiedFileName)

let destPath = path.join(destFolder, toBeCopiedFileName)
fs.copyFileSync(srcFilePath, destPath)
console.log('file Copied')