using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class EmployeeIncentive
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal? Salary { get; set; }
        public DateTime? JoiningDate { get; set; }
        public DateTime? IncentiveDate { get; set; }
        public decimal? IncentiveAmount { get; set; }
    }
}
