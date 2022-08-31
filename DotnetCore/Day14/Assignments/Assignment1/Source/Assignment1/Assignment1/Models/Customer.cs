using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Cusaddresses = new HashSet<Cusaddress>();
            Orders = new HashSet<Order>();
        }

        public int Cusid { get; set; }
        public string Cusname { get; set; }
        public string Cusemail { get; set; }
        public int? Cusphone { get; set; }

        public virtual ICollection<Cusaddress> Cusaddresses { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
