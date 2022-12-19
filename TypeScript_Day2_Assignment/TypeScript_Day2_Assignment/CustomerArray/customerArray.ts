class customer {
    private customerId: number;
    firstName: string;
    lastName: string;
    contactNo: number;
    email: string;
    isPrevilaged: boolean;
    // Getter and setter method for customerId
    public get custId(): number {
        return this.customerId;
    }
    public set custId(value: number) {
        this.customerId = value;
    }
    //constructor
    constructor(customerId: number, firstName: string, lastName: string, contactNo: number, email: string, isPrevilaged: boolean) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNo = contactNo;
        this.email = email;
        this.isPrevilaged = isPrevilaged;
    }
    //array for adding customer in array
    objarray: customer[] = [];
    //add method to add all customer
    addCustomer(Customer: customer): any {
        this.objarray.push(Customer);
    }
    //getCustomer to get all the customer from array
    getCustomer(): Array<customer> {
        for (var item in this.objarray) {
            //to get all value present in array
            console.log(...this.objarray);
            //for printing them
            console.log("Customer Id is : " + this.customerId);
            console.log("Customer First name is : " + this.firstName);
            console.log("Customer Last name is : " + this.lastName);
            console.log("Customer Contact number is : " + this.contactNo);
            console.log("Customer Email Id is : " + this.email);
            console.log("Customer IsPrevilaged ? : " + this.isPrevilaged);
        }
        return this.objarray;
    }
}
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
