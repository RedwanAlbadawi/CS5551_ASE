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

const detailOptions1 = {
    describe: 'Customer detail to update by value',
    demand : true,
    alias : 'd1'
}

const valueOptions1 = {
    describe: 'Customer updated Value ',
    demand: true,
    alias: 'v1'
}

const argv =  yargs

    .command('add','Add a new customer',{
      id: idOptions,
      firstName: firstOptions,
	  lastName: lastOptions,
	  email: emailOptions
    })
	.command('list','List all customers')
    .command('update', 'update  customer',{
        detail: detailOptions,
        value: valueOptions,
        detail1: detailOptions1,
        value1: valueOptions1
    })
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
//node app.js remove -d <id, first, last, email> -a <attribute to delete by>
//--------------------------------------------------------------
else if (command === 'remove') {
	var deleted = customers.removeCustomer(argv.detail,argv.value);
	if (deleted)
	    console.log('Unable to remove customer!');
	else
	    console.log('Customer has been removed.');
}
//--------------------------------------------------------------
// node app.js update --d1 <[id]> --v1 <[attribute of the id]>  -d <[id or first or last or email]> -v <[attribute of
// the id or first or last or email]>
//--------------------------------------------------------------
else if (command === 'update') {
    var update = customers.modifyCustomer(argv.detail1,argv.value1,argv.detail,argv.value);
    if (update)
        console.log(`Updating Customers placeholder.`);
}
//--------------------------------------------------------------
else{
  console.log('command not recognized'); 
}
