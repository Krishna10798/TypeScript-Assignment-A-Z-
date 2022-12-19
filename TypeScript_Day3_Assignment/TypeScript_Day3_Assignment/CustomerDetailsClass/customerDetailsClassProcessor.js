define(["require", "exports", "./customerDetailsClassModule"], function (require, exports, customerDetailsClassModule_1) {
    "use strict";
    exports.__esModule = true;
    //object of employee class
    var customer1 = new customerDetailsClassModule_1.customer(1001, "krishna", "yadav", 9876543210, "kri@gmail.com", true);
    console.warn("Customer details.....");
    customer1.displayDetails();
});
