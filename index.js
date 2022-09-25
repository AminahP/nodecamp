
////// ------ synchronous/ blocking code ------///////
// not used b/c it takes to long. would have to wait for function to run before you can run 
//another w/ non-blocking can do many functions at once

const fs = require('fs');
const http = require('http');

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}. \n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File Written!")


/////////--- asynchronous/ non blocking code ---////////

// const fs = required('fs');

// callback hell b/c too confusing to read
// fs.readFile('./txt/start.txt','utf-8',(err, data1) => {
//   if(err) return console.log('ERROR! File not found')
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err, data2) => {
//         console.log(data2);
//       fs.readFile(`./txt/append.txt`,'utf-8',(err, data3) => {
//          console.log(data3);

//          fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err =>{
//             console.log('Your file has been written 🤕');
//          })
//       });
//     });
// });
//   console.log('Will read file!');
       // avaoid callback hell using async await





