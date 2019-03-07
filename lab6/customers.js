const fs =  require('fs');


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
    var customer = {id,fname,lname,email}
	
	var duplicateCustomers =  customers.filter((customer) => {
		return customer.id === id;
		return customer.fname === fname;
		return customer.lname === lname;
	});
	if (duplicateCustomers.length === 0){
      customers.push(customer);
      saveCustomers(customers);
      return customer
	} else {
		console.log(`Customer ${customer.fname} ${customer.lname} - ID:${customer.id} already exists!`);
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

var removeCustomer = (pos) => {
	var customers = fetchCustomers();
	customers.splice(pos, 1);
	saveCustomers(customers);
}

// var findCustomer = (key, val) => {
//	var customers = fetchCustomers();
//	customers.filter(function(key)
//		return key.va
//}
  
module.exports = {
  addCustomer, getAll, removeCustomer, logCustomer
};