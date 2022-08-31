using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Job
    {
        public string JobId { get; set; }
        public string JobTitle { get; set; }
        public decimal? MinSalary { get; set; }
        public decimal? MaxSalary { get; set; }
    }
}
