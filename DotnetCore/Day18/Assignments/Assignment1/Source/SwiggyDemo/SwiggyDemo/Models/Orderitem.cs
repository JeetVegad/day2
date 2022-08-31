using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Orderitem
    {
        public int Orderitemid { get; set; }
        public int? Orderid { get; set; }
        public int Foodid { get; set; }
        public int Quantity { get; set; }
        public int Subtotal { get; set; }

        public virtual Foodmaster Food { get; set; }
        public virtual Order Order { get; set; }
    }
}
