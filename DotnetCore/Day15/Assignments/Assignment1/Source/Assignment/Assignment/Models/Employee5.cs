using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Employee5
    {
        public int Empid { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public decimal Salary { get; set; }
        public DateTime Joindate { get; set; }
        public string Department { get; set; }
        public int? Managerid { get; set; }
    }
}
