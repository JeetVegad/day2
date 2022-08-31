let stdent = new Set();  
   
//Add Values  
stdent.add("John");  
stdent.add("Peter");  
stdent.add("Gayle");  
stdent.add("Kohli");   
stdent.add("Dhawan");   
  
//data  
console.log(stdent);   
   
//Checking value is present or not  
console.log(stdent.has("Kohli"));        
console.log(stdent.has(10));        
   
   
//Delete value 
console.log(stdent.delete("Dhawan"));      
   

stdent.clear();   
  

console.log(stdent);  



let stdent1= new Set();  
   
//For Chaining we use add();  
stdent1.add("John").add("Peter").add("Gayle").add("Kohli");  
  

console.log("The List of Set values:");  
console.log(stdent1);  



let dice = new Set();  
  
dice.add(1).add(2).add(3).add(4).add(5).add(6);  
   
//Iteration with for of  
console.log("Dice Entries are:");   
for (let diceNumber of dice) {  
    console.log(diceNumber);   
}  
   
// Iteration with forEach  
console.log("Dice Entries with forEach are:");   
dice.forEach(function(value) {  
  console.log(value);     
});  