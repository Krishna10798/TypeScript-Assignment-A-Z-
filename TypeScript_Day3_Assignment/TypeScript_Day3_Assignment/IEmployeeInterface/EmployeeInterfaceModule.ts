interface IEmployee {
    employeeId: number;
    firstName: string;
    lastName: string;
    contactNo: number;
    email: string;
    isActive: boolean;
}
//implement above class to use all properties
export class Employee implements IEmployee {
    employeeId: number;
    firstName: string;
    lastName: string;
    contactNo: number;
    email: string;
    isActive: boolean;
    //constructor
    constructor(employeeId: number, firstName: string, lastName: string, contactNo: number, email: string, isActive: boolean) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNo = contactNo;
        this.email = email;
        this.isActive = isActive;
    }
    //method to display all the properties of employees
    displayDetails(): void {
        console.log("Employee Id is : " + this.employeeId);
        console.log("Employee First name is : " + this.firstName);
        console.log("Employee Last name is : " + this.lastName);
        console.log("Employee Contact number is : " + this.contactNo);
        console.log("Employee Email Id is : " + this.email);
        console.log("Employee IsActive ? : " + this.isActive);
    }
}
