
let finalIncome: (baseSalary: any, tax: any) => any = function (salary, tax) {
     return salary- tax;
};
var salary:any =50000;
var tax:any =salary*(0.1);
console.log("final income in hand: "+finalIncome(salary,tax))