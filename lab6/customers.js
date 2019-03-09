const fs =  require('fs');
const _ = require('lodash');
//--------------------------------------------------------------
//Parse through customer-data.json file
//--------------------------------------------------------------
var fetchCustomers = () => {
  try { //if file won't exist
    var customerString = fs.readFileSync('customer-data.json')
    return JSON.parse(customerString);
  } catch(e){
    return [];
  }
};
//--------------------------------------------------------------
// Update customer-data.json file
//--------------------------------------------------------------
var saveCustomers = (customer) => {
  fs.writeFileSync('customer-data.json',JSON.stringify(customer));
};
//--------------------------------------------------------------
// Adding a new customer
//--------------------------------------------------------------
var addCustomer = (id,firstName,lastName,email) => {
    var customers = fetchCustomers();
    var customer = {id,firstName,lastName,email};
	
	var duplicateCustomers =  customers.filter((customer) => {
		return customer.id === id;
		return customer.firstName === firstName;
		return customer.lastName === lastName;
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
//--------------------------------------------------------------
// Log customer details to console
//--------------------------------------------------------------
var logCustomer = (customer) => {
  console.log('--');
  console.log(`ID: ${customer.id}`);
  console.log(`First Name: ${customer.firstName}`);
  console.log(`Last Name: ${customer.lastName}`);
  console.log(`Email: ${customer.email}`);
};
//--------------------------------------------------------------
// Get all customers using fetchCustomers
//--------------------------------------------------------------
var getAll = () => {
    return fetchCustomers();
};
//--------------------------------------------------------------
// Remove a customer by detail [id, first name, last name, email] and attribute
//--------------------------------------------------------------
var removeCustomer = (det,val) => {
	var customers = fetchCustomers();
	var updtCustomers = '';

	if (det === "id") {
        updtCustomers = customers.filter((customer) => customer.id !== val);
        saveCustomers(updtCustomers);
    }
    else if (det === "first") {
        updtCustomers = customers.filter((customer) => customer.firstName !== val);
        saveCustomers(updtCustomers);
    }
    else if (det === "last") {
        updtCustomers = customers.filter((customer) => customer.lastName !== val);
        saveCustomers(updtCustomers);
    }
    else if (det === "email") {
        updtCustomers = customers.filter((customer) => customer.email !== val);
        saveCustomers(updtCustomers);
    }
	else
	    console.log('Detail must be id, first, last, or e')

    return customers.length === updtCustomers.length;

};

//--------------------------------------------------------------
// update a customer by detail [id] and attribute
//--------------------------------------------------------------

var modifyCustomer = (idd,val1,det,val) => {
    var customers = fetchCustomers();
    var updtCustomers = '';

    if (idd === "id") {
        var index = customers.findIndex(function (item, i) {
            return item.name === val1
        });
        console.log(index);


        if (det === "id") {
            updtCustomers = customers.filter((customer) => customer[index].id = val);
            saveCustomers(updtCustomers);
        }
        else if (det === "first") {
            updtCustomers = customers.filter((customer) => customer[index].firstName = val);
            saveCustomers(updtCustomers);
        }
        else if (det === "last") {
            updtCustomers = customers.filter((customer) => customer[index].lasttName = val);
            saveCustomers(updtCustomers);
        }
        else if (det === "email") {
            updtCustomers = customers.filter((customer) => customer[index].email = val);
            saveCustomers(updtCustomers);
        }

        console.log(index);
        saveCustomers(updtCustomers);
        return customers.length === updtCustomers.length;
    }
}


//--------------------------------------------------------------
module.exports = {
  addCustomer, getAll, removeCustomer, logCustomer,modifyCustomer
};

