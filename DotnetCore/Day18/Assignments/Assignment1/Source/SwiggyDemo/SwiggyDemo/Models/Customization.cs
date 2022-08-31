using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Customization
    {
        public int Customizeid { get; set; }
        public int Fooditemid { get; set; }
        public int Prepid { get; set; }

        public virtual Restaurantfooditem Fooditem { get; set; }
        public virtual Prepoption Prep { get; set; }
    }
}
