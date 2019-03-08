const fs =  require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const customers = require('./customers.js');
//--------------------------------------------------------------
// Start - command configuration
//--------------------------------------------------------------
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

const detailOptions = {
    describe: 'Customer detail to delete by value',
    demand : true,
    alias : 'd'
}

const valueOptions = {
    describe: 'Customer Value to delete by',
    demand: true,
    alias: 'v'
}

const argv =  yargs

    .command('add','Add a new customer',{
      id: idOptions,
      firstName: firstOptions,
	  lastName: lastOptions,
	  email: emailOptions
    })
	.command('list','List all customers')
	.command('remove', 'Remove last customer',{
        detail: detailOptions,
		value: valueOptions
    })
    .help()
    .argv;

//--------------------------------------------------------------
// End - command configuration
//--------------------------------------------------------------
var command = argv._[0];
//--------------------------------------------------------------
// node app.js add -i <id> -f <first name> -l <last name> -e <email>
//--------------------------------------------------------------
if (command === 'add'){
    var customer = customers.addCustomer(argv.id,argv.firstName,argv.lastName,argv.email);
    if (customer){
      customers.logCustomer(customer);
    } 
}
//--------------------------------------------------------------
//node app.js list
//--------------------------------------------------------------
else if (command === 'list') {
  var AllCustomers = customers.getAll();
  console.log(`Printing ${AllCustomers.length} customers.`);
  AllCustomers.forEach((customer)=>{
    customers.logCustomer(customer);
  });
}
//--------------------------------------------------------------
//node app.js remove -d <[id, first, last, email]> -a <attribute to delete by>
//--------------------------------------------------------------
else if (command === 'remove') {
	var deleted = customers.removeCustomer(argv.detail,argv.value);
	if (deleted)
	    console.log('Unable to remove customer!');
	else
	    console.log('Customer has been removed.');
}
//--------------------------------------------------------------
// Placeholder for update function
//--------------------------------------------------------------
else if (command === 'update') {
    console.log(`Updating Customers placeholder.`);
}
//--------------------------------------------------------------
else{
  console.log('command not recognized'); 
}
