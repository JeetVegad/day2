using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Orderitem
    {
        public int Orderitemid { get; set; }
        public int? Orderid { get; set; }
        public int Fooditemid { get; set; }
        public int Quantity { get; set; }
        public int? Restaurantid { get; set; }

        public virtual Restaurantfooditem Fooditem { get; set; }
        public virtual Order Order { get; set; }
        public virtual Restaurant Restaurant { get; set; }
    }
}
