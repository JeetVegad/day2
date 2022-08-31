using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Practice1.Models
{
    public partial class Person
    {
        [Key]
        public int PesrsonId { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public int? EmpNo { get; set; }
        public string Gender { get; set; }
        public int? Age { get; set; }
    }
}
