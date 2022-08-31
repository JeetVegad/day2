using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class FeePayment
    {
        public string StudentId { get; set; }
        public string AmountPaid { get; set; }
        public string DateofPayment { get; set; }
    }
}
