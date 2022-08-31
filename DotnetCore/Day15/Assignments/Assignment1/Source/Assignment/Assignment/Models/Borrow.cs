using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Borrow
    {
        public string Loanno { get; set; }
        public string Cname { get; set; }
        public string Bname { get; set; }
        public int? Amount { get; set; }
    }
}
