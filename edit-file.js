'use strict';

const fs = require('fs');

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

'use strict';
let fs = require('fs') ;
let util = require('util') ;
// let reader = require('./lib/reader.js') ;
// let write = require('./lib/write.js');
let file = process.argv.slice(2).shift();
console.log(file,'xxxxxxxxxxxx');
// let file = `${__dirname}/files/data/person.json`;
let readFile = util.promisify(fs.readFile);
// let writeFile = util.promisify(fs.writeFile);
////// herre we read data and then edit it  
let readFileEditAndwrite =(file) =>{
    event.emit() 
    return readFile(file)
    .then(data => {
        // event.emitv( file is read )
      console.log(data);
      // here the return data will be the original befor edit 
      let addData = JSON.parse(data.toString()) ;
      // console.log(addData)
      addData.firstName = 'mai';
      addData.married ='yup' ;
      addData.kids = 6 ;
      
      let myInformation = JSON.stringify(addData);
      console.log('new' , myInformation);
      
      fs.writeFile(file , myInformation , cb =>{
          
          console.log( addData);
          // event.emitv( file is read )
      
        return addData;
      }) ;
    })
    .catch(err => { throw err; });
};
readFileEditAndwrite(file);
module.exports ={ readFileEditAndwrite , readFile};

// alterFile(file);