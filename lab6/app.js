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
    alias : 'f'
}

const lastOptions = {
    describe: 'Last Name',
    demand : true,
    alias : 'l'
}

const emailOptions = {
    describe: 'Customer Email',
    demand : true,
    alias : 'e'
}

const detOptions = {
    describe: 'Customer detail to delete by value',
    demand : true,
    alias : 'd'
}

const valOptions = {
    describe: 'Customer Value to delete by',
    demand: true,
    alias: 'v'
}


const argv =  yargs

    .command('add','Add a new customer',{
      id: idOptions,
      fname: firstOptions,
	  lname: lastOptions,
	  email: emailOptions
    })
	.command('list','List all customers')
	.command('remove', 'Remove last customer',{
        custDetail: detOptions,
		custValue: valOptions
    })
    .help()
    .argv;
	
// ------------ End - command configuration -----------------


var command = argv._[0];
	
if (command === 'add'){
    var customer = customers.addCustomer(argv.id,argv.fname,argv.lname,argv.email);
    if (customer){
      customers.logCustomer(customer);
    } 
}

else if (command === 'list') {
  var AllCustomers = customers.getAll();
  console.log(`Printing ${AllCustomers.length} customers.`);
  AllCustomers.forEach((customer)=>{
    customers.logCustomer(customer);
  });
}

else if (command === 'remove') {
	customers.removeCustomer(argv.custDetail,argv.custValue);
}

else if (command === 'update') {
    console.log(`Updating Customers placeholder.`);
}


else{
  console.log('command not recognized'); 
}
