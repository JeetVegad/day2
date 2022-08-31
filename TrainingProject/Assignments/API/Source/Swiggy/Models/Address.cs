using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Address
    {
        public Address()
        {
            Orders = new HashSet<Order>();
        }

        public int Addid { get; set; }
        public int Userid { get; set; }
        public string Addresses { get; set; }
        public bool Defaultadd { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
