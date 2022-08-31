using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class City
    {
        public City()
        {
            Restaurants = new HashSet<Restaurant>();
        }

        public int Cityid { get; set; }
        public string Cityname { get; set; }

        public virtual ICollection<Restaurant> Restaurants { get; set; }
    }
}
