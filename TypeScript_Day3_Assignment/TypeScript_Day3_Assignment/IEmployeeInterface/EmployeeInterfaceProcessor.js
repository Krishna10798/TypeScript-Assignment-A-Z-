define(["require", "exports", "./EmployeeInterfaceModule"], function (require, exports, EmployeeInterfaceModule_1) {
    "use strict";
    exports.__esModule = true;
    //object of employee class
    var employee1 = new EmployeeInterfaceModule_1.Employee(10001, "krishna", "yadav", 9876543210, "kri@gmail.com", true);
    console.warn("Employee details.....");
    employee1.displayDetails();
});
