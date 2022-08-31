using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Restaurant
    {
        public Restaurant()
        {
            Carts = new HashSet<Cart>();
            Orderitems = new HashSet<Orderitem>();
            Restaurantfooditems = new HashSet<Restaurantfooditem>();
        }

        public int Restaurantid { get; set; }
        public string Restaurantname { get; set; }
        public string Restauranttype { get; set; }
        public double Rating { get; set; }
        public int Price { get; set; }
        public string Images { get; set; }
        public string Coupen { get; set; }
        public string Addresss { get; set; }
        public int? Cityid { get; set; }
        public int? Times { get; set; }

        public virtual City City { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
        public virtual ICollection<Restaurantfooditem> Restaurantfooditems { get; set; }
    }
}
