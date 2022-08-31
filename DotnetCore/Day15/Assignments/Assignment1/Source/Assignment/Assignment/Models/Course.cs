using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int? TotalFees { get; set; }
    }
}
