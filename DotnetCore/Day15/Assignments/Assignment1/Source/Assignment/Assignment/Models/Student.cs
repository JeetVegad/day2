using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Student
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int? TotalFees { get; set; }
        public int? RemainingAmt { get; set; }
    }
}
