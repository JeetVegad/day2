using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Foodmaster
    {
        public Foodmaster()
        {
            Cartitems = new HashSet<Cartitem>();
            Restaurantfooditems = new HashSet<Restaurantfooditem>();
        }

        public int Foodid { get; set; }
        public string Foodname { get; set; }

        public virtual ICollection<Cartitem> Cartitems { get; set; }
        public virtual ICollection<Restaurantfooditem> Restaurantfooditems { get; set; }
    }
}
