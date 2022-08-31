using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Cart
    {
        public Cart()
        {
            Cartitems = new HashSet<Cartitem>();
        }

        public int Cartid { get; set; }
        public int Restaurantid { get; set; }
        public int? Customerid { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Restaurant Restaurant { get; set; }
        public virtual ICollection<Cartitem> Cartitems { get; set; }
    }
}
