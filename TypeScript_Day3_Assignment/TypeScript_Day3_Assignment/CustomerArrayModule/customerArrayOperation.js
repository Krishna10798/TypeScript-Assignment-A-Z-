define(["require", "exports", "./customerArrayModule"], function (require, exports, customerArrayModule_1) {
    "use strict";
    exports.__esModule = true;
    // 1st object 
    var customer1 = new customerArrayModule_1.customer(1001, "krishna", "yadav", 9876543210, "kri@gmail.com", true);
    customer1.addCustomer(customer1);
    //customer details
    console.warn("customer 1 details.....");
    customer1.getCustomer();
    //2nd object
    var customer2 = new customerArrayModule_1.customer(1002, "Nachiket", "Imandar", 8786789654, "nachiket@gmail.com", true);
    customer2.addCustomer(customer2);
    //customer details
    console.warn("customer 2 details.....");
    customer2.getCustomer();
});
