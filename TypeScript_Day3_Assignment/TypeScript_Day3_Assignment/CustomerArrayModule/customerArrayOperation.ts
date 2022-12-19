import {customer } from "./customerArrayModule";
// 1st object 
let customer1 = new customer(1001, "krishna", "yadav", 9876543210, "kri@gmail.com", true);
customer1.addCustomer(customer1);
//customer details
console.warn("customer 1 details.....");
customer1.getCustomer();
//2nd object
let customer2 = new customer(1002, "Nachiket", "Imandar", 8786789654, "nachiket@gmail.com", true);
customer2.addCustomer(customer2);
//customer details
console.warn("customer 2 details.....");
customer2.getCustomer();
