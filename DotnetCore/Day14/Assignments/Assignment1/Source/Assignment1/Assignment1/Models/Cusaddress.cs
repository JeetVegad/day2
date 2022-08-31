using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Cusaddress
    {
        public Cusaddress()
        {
            Orders = new HashSet<Order>();
        }

        public int Addressid { get; set; }
        public int? Cusid { get; set; }
        public string Addressname { get; set; }

        public virtual Customer Cus { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
