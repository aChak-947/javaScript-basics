const fs = require('fs')
const path = require('path')

//reading from a file
// let content = fs.readFileSync('f1.txt')
// console.log('This is f1 data -> ' + content)

//writing to a file
// fs.writeFileSync('f2.txt', 'Hello from f2')

//append to a file
// fs.appendFileSync('f2.txt', ' This is f2 data.')

//delete a file
// fs.unlinkSync('f2.txt')
// console.log('File Removed')

//create a directory
fs.mkdirSync('myDirectory')

//delete a directory
//fs.rmdirSync('myDirectory')

let doesExist = fs.existsSync('myDirectory')
console.log(doesExistInDirectory)
