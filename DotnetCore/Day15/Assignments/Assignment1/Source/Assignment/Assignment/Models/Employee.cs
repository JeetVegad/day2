using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal? Salary { get; set; }
        public DateTime? JoiningDate { get; set; }
        public string Department { get; set; }
        public int? ManagerId { get; set; }
    }
}
