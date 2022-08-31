let map = new Map();  
  
map.set('1', 'abhishek');     
map.set(1, 'www.javatpoint.com');       
map.set(true, 'bool1');   
map.set('2', 'ajay');  
  
console.log( "Value1= " +map.get(1)   );   
console.log("Value2= " + map.get('1') );   
console.log( "Key is Present= " +map.has(3) );   
console.log( "Size= " +map.size );   
console.log( "Delete value= " +map.delete(1) );   
console.log( "New Size= " +map.size );  



let ageMapping = new Map();  
   
ageMapping.set("Rakesh", 40);  
ageMapping.set("Abhishek", 25);  
ageMapping.set("Amit", 30);  
   
//Iteration with key
for (let key of ageMapping.keys()) {  
    console.log("Map Keys= " +key);          
}  
//Iteration with value  
for (let value of ageMapping.values()) {  
    console.log("Map Values= " +value);      
}  
console.log("The Map Enteries are: ");   
//Iteration with entries 
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
}  