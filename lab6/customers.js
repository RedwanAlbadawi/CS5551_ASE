const fs =  require('fs');
const _ = require('lodash');


// ------------------Begin of Reusable functions ---------------------

var fetchCustomers = () => {
  try { //if file won't exist
    var customerString = fs.readFileSync('customer-data.json')
    return JSON.parse(customerString);
  } catch(e){
    return [];
  }
};

var saveCustomers = (customer) => {
  fs.writeFileSync('customer-data.json',JSON.stringify(customer));
};

//  to add a new note

var addCustomer = (id,fname,lname,email) => {   
    var customers = fetchCustomers();
    var customer = {id,fname,lname,email};
	
	var duplicateCustomers =  customers.filter((customer) => {
		return customer.id === id;
		return customer.fname === fname;
		return customer.lname === lname;
        return customer.email === email;
	});
	if (duplicateCustomers.length === 0){
      customers.push(customer);
      saveCustomers(customers);
      return customer
	} else {
		console.log(`Customer ID:${customer.id} already exists!`);
	}
 };
  
var logCustomer = (customer) => {
  console.log('--');
  console.log(`ID: ${customer.id}`);
  console.log(`First Name: ${customer.fname}`);
  console.log(`Last Name: ${customer.lname}`);
  console.log(`Email: ${customer.email}`);
};

var getAll = () => {
    return fetchCustomers();
};

var removeCustomer = (det,val) => {
	var customers = fetchCustomers();
	if (det === "id") {
        var updtCustomers = customers.filter((customer) => customer.id !== val);
        saveCustomers(updtCustomers);
    }
    else if (det === "fname") {
        var updtCustomers = customers.filter((customer) => customer.fname !== val);
        saveCustomers(updtCustomers);
    }
    else if (det === "lname") {
        var updtCustomers = customers.filter((customer) => customer.lname !== val);
        saveCustomers(updtCustomers);
    }
    else if (det === "email") {
        var updtCustomers = customers.filter((customer) => customer.email !== val);
        saveCustomers(updtCustomers);
    }
	else
	    console.log('Detail must be id, fname, lname, or e')
};

module.exports = {
  addCustomer, getAll, removeCustomer, logCustomer
};
