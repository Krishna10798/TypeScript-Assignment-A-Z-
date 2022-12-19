var customer = /** @class */ (function () {
    //constructor
    function customer(customerId, firstName, lastName, contactNo, email, isPrevilaged) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNo = contactNo;
        this.email = email;
        this.isPrevilaged = isPrevilaged;
    }
    Object.defineProperty(customer.prototype, "custId", {
        // Getter and setter method for customerId
        get: function () {
            return this.customerId;
        },
        set: function (value) {
            this.customerId = value;
        },
        enumerable: false,
        configurable: true
    });
    //method to display all the properties of customer
    customer.prototype.displayDetails = function () {
        console.log("Customer Id is : " + this.customerId);
        console.log("Customer First name is : " + this.firstName);
        console.log("Customer Last name is : " + this.lastName);
        console.log("Customer Contact number is : " + this.contactNo);
        console.log("Customer Email Id is : " + this.email);
        console.log("Customer IsPrevilaged ? : " + this.isPrevilaged);
    };
    return customer;
}());
//object of employee class
var customer1 = new customer(1001, "krishna", "yadav", 9876543210, "kri@gmail.com", true);
console.warn("Customer details.....");
customer1.displayDetails();
