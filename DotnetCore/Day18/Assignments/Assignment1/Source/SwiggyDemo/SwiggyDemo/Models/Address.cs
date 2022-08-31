using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Address
    {
        public int Addid { get; set; }
        public int Customerid { get; set; }
        public string Addresses { get; set; }
        public bool Defaultadd { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
