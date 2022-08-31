using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class CourseEnrolled
    {
        public int StudentId { get; set; }
        public int? CourseId { get; set; }
    }
}
