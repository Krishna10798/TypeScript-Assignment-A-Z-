//implement above class to use all properties
var Employee = /** @class */ (function () {
    //constructor
    function Employee(employeeId, firstName, lastName, contactNo, email, isActive) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNo = contactNo;
        this.email = email;
        this.isActive = isActive;
    }
    //method to display all the properties of employees
    Employee.prototype.displayDetails = function () {
        console.log("Employee Id is : " + this.employeeId);
        console.log("Employee First name is : " + this.firstName);
        console.log("Employee Last name is : " + this.lastName);
        console.log("Employee Contact number is : " + this.contactNo);
        console.log("Employee Email Id is : " + this.email);
        console.log("Employee IsActive ? : " + this.isActive);
    };
    return Employee;
}());
//object of employee class
var employee1 = new Employee(10001, "krishna", "yadav", 9876543210, "kri@gmail.com", true);
console.warn("Employee details.....");
employee1.displayDetails();
