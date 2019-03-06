const fs =  require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const customers = require('./customers.js');

const idOptions = {
    describe: 'Customer ID',
    demand : true,
    alias : 'i'
}

const firstOptions = {
    describe: 'First Name',
    demand : true,
    alias : 'fn'
}

const lastOptions = {
    describe: 'Last Name',
    demand : true,
    alias : 'ln'
}

const emailOptions = {
    describe: 'Customer Email',
    demand : true,
    alias : 'e'
}

const argv =  yargs

    .command('add','Add a new customer',{
      id: idOptions,
      fname: firstOptions,
	  lname: lastOptions,
	  email: emailOptions
    })
    .help()
    .argv;
	
// ------------ End - command configuration -----------------


var command = argv._[0];
	
if (command === 'add'){
    var customer = customers.addCustomer(argv.id,argv.fname,argv.lname,argv.email);
    if (customer){
      customers.logCustomer(customer);                //add a new note
    } 
}
	
else{
  console.log('command note recognized'); 
}