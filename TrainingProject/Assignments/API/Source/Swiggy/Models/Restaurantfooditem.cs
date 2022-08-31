﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Restaurantfooditem
    {
        public Restaurantfooditem()
        {
            Customizations = new HashSet<Customization>();
            Orderitems = new HashSet<Orderitem>();
        }

        public int Fooditemid { get; set; }
        public int Foodid { get; set; }
        public int Restaurantid { get; set; }
        public int Price { get; set; }
        public string Images { get; set; }
        public string Description { get; set; }
        public string Foodname { get; set; }

        public virtual Foodmaster Food { get; set; }
        public virtual Restaurant Restaurant { get; set; }
        public virtual ICollection<Customization> Customizations { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
    }
}
