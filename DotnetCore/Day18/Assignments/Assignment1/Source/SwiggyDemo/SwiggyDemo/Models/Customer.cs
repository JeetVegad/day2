using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Addresses = new HashSet<Address>();
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
        }

        public int Customerid { get; set; }
        public string Customername { get; set; }
        public string Customeremail { get; set; }
        public string Passwords { get; set; }
        public int Phone { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
