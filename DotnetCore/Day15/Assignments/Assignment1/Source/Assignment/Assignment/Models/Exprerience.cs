using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Exprerience
    {
        public string DepartmentName { get; set; }
        public string Name { get; set; }
        public DateTime HireDate { get; set; }
        public decimal? Salary { get; set; }
    }
}
