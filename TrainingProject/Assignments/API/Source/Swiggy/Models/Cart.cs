using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Cart
    {
        public Cart()
        {
            Cartitems = new HashSet<Cartitem>();
        }

        public int Cartid { get; set; }
        public int Restaurantid { get; set; }
        public int? Userid { get; set; }

        public virtual Restaurant Restaurant { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Cartitem> Cartitems { get; set; }
    }
}
