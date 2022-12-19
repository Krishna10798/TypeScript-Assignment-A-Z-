define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.customer = void 0;
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
    exports.customer = customer;
});
