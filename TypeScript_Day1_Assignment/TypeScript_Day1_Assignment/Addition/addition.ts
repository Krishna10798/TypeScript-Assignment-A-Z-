function addNumbers(){
    var sum =0; 
    for(var i=0;i<arguments.length;i++){
       sum += arguments[i];
    }
     return sum;
  }
  console.log("sum of three number is "+addNumbers(10,20,30)); 
  console.log("sum of four number is "+addNumbers(10,20,30,40)); 

 