using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Incentive
    {
        public int? Empid { get; set; }
        public DateTime Incdate { get; set; }
        public decimal Incamount { get; set; }

        public virtual Employee5 Emp { get; set; }
    }
}
