const events = require('./events.js');

events.on('readRileEditeAndWrite',payload =>log('readRileEditeAndWrite',payload));

events.on('error',payload =>log('error',payload));

function log(events , payload){

    let time = new Date();

    console.log({events,time,payload});
}

module.exports = log;