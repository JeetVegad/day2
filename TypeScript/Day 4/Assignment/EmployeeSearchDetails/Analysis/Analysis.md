1. Create an array with 4 Fields.4
- var emp: [number, string, string, Date][];

2. Now store the Date of joining in variables.
- let dt1:Date=new Date("2016-01-01");
  let dt2:Date=new Date("2017-01-01");
  let dt3:Date=new Date("2020-01-01");
  let dt4:Date=new Date("2021-01-01");
  let dt5:Date=new Date("2022-01-01");

3. Store Employee data in array.
  - emp = [[20, 'Jason Roy', 'Bhavnagar',dt1],
    [21, 'John Doe', 'Rajkot' ,dt2],
    [22, 'Virat Kohli', 'Mumbai',dt3 ],
    [23, 'Rohit Sharma', 'Mumbai',dt4],
    [24, 'Ben Stokes', 'Ahmedabad', dt5]
    ];

4. For Searching details with employee ID run for loop.
    - till length of the array
        - Add if condition in for particular person detail. 
           - for (let i = 0; i < emp.length; i++)
           {
                if(emp[i][0]==21){
                    console.log(emp[i]);
                }
            }
        
5.  Search the employees who has joined after year 2020.
- Run for loop till array length.
- Now year of joining store in ne variable yr.
-      let yr = emp[i][3].getFullYear();
- than use if statemant for detail of after year 2020  joined.
- if(yr>2020){
     console.log("Employees who join After 2020 :" ,emp[i]);
             }

6. Search the employee who has joined after year 2020 and stays in Mumbai city.
- Run for loop till array length.
- Now year of joining store in ne variable yr.
-      let yr = emp[i][3].getFullYear();
- than use if statemant for detail of after year 2020  joined and live in "Mumbai" city .
-  if(yr>2020 && emp[i][2] == "Mumbai"){
     console.log("Employees who join After 2020 and live in mumbai:" ,emp[i]);
    }