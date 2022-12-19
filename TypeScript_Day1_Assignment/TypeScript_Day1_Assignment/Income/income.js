var finalIncome = function (salary, tax) {
    return salary - tax;
};
var salary = 50000;
var tax = salary * (0.1);
console.log("final income in hand: " + finalIncome(salary, tax));
