export class customer {
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
    constructor(customerId: number, firstName: string, lastName: string, contactNo: number, email: string, isPrevilaged: true) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNo = contactNo;
        this.email = email;
        this.isPrevilaged = isPrevilaged;
    }
    //method to display all the properties of customer
    displayDetails(): void {
        console.log("Customer Id is : " + this.customerId);
        console.log("Customer First name is : " + this.firstName);
        console.log("Customer Last name is : " + this.lastName);
        console.log("Customer Contact number is : " + this.contactNo);
        console.log("Customer Email Id is : " + this.email);
        console.log("Customer IsPrevilaged ? : " + this.isPrevilaged);
    }

}