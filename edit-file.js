'use strict';


let fs = require('fs') ;
let util = require('util') ;


const events = require('./events.js')
 require('./logger.js') ;

let file = `${__dirname}/data/person.json`;
process.argv[2] = file
// console.log( process.argv)


let readFile = util.promisify(fs.readFile);

// read data and edit  
let readFileEditAndWrite =(file) =>{
    // event.emit() 
    return readFile(file)
    .then(data => {
        events.emit( 'readFileEditAndWrite', 'the file is read' )
      console.log(data);
      // here the return data will be the original befor edit 
      let addDataToFile = JSON.parse(data.toString().toUpperCase()) ;
    
      let myInformation = JSON.stringify(addDataToFile);
      console.log('new' , myInformation);
      
      fs.writeFile(file , myInformation , cb =>{

        events.emit( 'readFileEditAndWrite', 'the file is converted to upper case' )
          console.log( addDataToFile);
      
        return addDataToFile;
      }) ;
    })
    .catch(error => { 

        // emit errors
        events.emit('error', error)
      });
};

// invoking the function
readFileEditAndWrite(file);


module.exports ={ readFileEditAndWrite , readFile};