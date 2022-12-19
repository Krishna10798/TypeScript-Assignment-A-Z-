var customer = /** @class */ (function () {
    //constructor
    function customer(customerId, firstName, lastName, contactNo, email, isPrevilaged) {
        //array for adding customer in array
        this.objarray = [];
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
    //add method to add all customer
    customer.prototype.addCustomer = function (Customer) {
        this.objarray.push(Customer);
    };
    //getCustomer to get all the customer from array
    customer.prototype.getCustomer = function () {
        for (var item in this.objarray) {
            //to get all value present in array
            console.log.apply(console, this.objarray);
            //for printing them
            console.log("Customer Id is : " + this.customerId);
            console.log("Customer First name is : " + this.firstName);
            console.log("Customer Last name is : " + this.lastName);
            console.log("Customer Contact number is : " + this.contactNo);
            console.log("Customer Email Id is : " + this.email);
            console.log("Customer IsPrevilaged ? : " + this.isPrevilaged);
        }
        return this.objarray;
    };
    return customer;
}());
// 1st object 
var customer1 = new customer(1001, "krishna", "yadav", 9876543210, "kri@gmail.com", true);
customer1.addCustomer(customer1);
//customer details
console.warn("customer 1 details.....");
customer1.getCustomer();
//2nd object
var customer2 = new customer(1002, "Nachiket", "Imandar", 8786789654, "nachiket@gmail.com", true);
customer2.addCustomer(customer2);
//customer details
console.warn("customer 2 details.....");
customer2.getCustomer();
