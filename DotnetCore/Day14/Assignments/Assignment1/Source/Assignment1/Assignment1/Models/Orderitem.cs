using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Orderitem
    {
        public int Orderitemid { get; set; }
        public int? Orderid { get; set; }
        public int? Toyid { get; set; }
        public int? Qty { get; set; }

        public virtual Order Order { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
