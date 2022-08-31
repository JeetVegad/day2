1. declare employee array with 5 person data includind id, firstname , lastname , address, salary.
2. declare another array name as emp take 5 person data as per given format.
3. Here I'm using Static value of index for get data of particular employee with employee Id
-> run for loop till array length
-> if (id == employee[i][0]) then console.log(employee[i]); 
4. with help of push() operation adding one employeee detail.
5. with help of pop() operation deleting one employeee detail.

6. Creating one more array emp as given details.
- with 5 new employee details and join/concat with employee array.
- var newdata = employee.concat(emp);

7. run for loop till array length
- desplaying all employee details.
- here fullname with first and last name.
- for adress first we will split in three parameters city flatnumber and state with help of split().
-  let address = employee[i][3].split(' ');
    console.log("Flat number:", address[0]);
    console.log("City :", address[1]);
    console.log("State:", address[2]);
- for salary we can calucate the PF and after display the salary.
- console.log('salary :', employee[i][4] - (0.12 * employee[i][4]))

