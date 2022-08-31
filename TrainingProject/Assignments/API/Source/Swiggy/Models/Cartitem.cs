using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Cartitem
    {
        public int Cartitemid { get; set; }
        public int Cartid { get; set; }
        public int Foodid { get; set; }
        public int Quantity { get; set; }
        public int Subtotal { get; set; }

        public virtual Cart Cart { get; set; }
        public virtual Foodmaster Food { get; set; }
    }
}
