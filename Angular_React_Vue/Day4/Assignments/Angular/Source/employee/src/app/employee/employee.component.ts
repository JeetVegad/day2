import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  empId:string = '';
  empName:string = '';
  empAddress:string='';
  gender:string='';
  Doj:string='';
  hobbies:string='';

    EmployeeArray:any[] = [];
    SortedEmpByDoj:any[] = [];
  
   addEmployee(){
      var tempEmp = {empId : this.empId , empName : this.empName , empAddress : this.empAddress , gender : this.gender , Doj: this.Doj , hobbies : this.hobbies };
      this.EmployeeArray.push(tempEmp);
      this.empId="";
      this.empName="";
      this.empAddress="";
      this.gender="";
      this.Doj="";
      this.hobbies="";
      
      this.EmployeeArray.sort((a, b) => a.empName.localeCompare(b.empName))
      console.log(this.EmployeeArray);
    }
    
    sotrByDate(){
      
      var SortedEmp = this.EmployeeArray.filter((val)=>{
        return new Date(val.Doj).getMonth() == new Date().getMonth();
      })
      // console.log(SortedEmp);
      this.SortedEmpByDoj = SortedEmp;
  
        //  employee:Array<any> = [{
        //    id: '',
        //    name: '',
        //    address: '',
        //    gender: '',
        //    doj: '',
        //    hobbies: '',
        //  }];
         
         }
        }
  
