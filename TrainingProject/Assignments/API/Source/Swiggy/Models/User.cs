using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class User
    {
        public User()
        {
            Addresses = new HashSet<Address>();
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
        }

        public int Userid { get; set; }
        public string Username { get; set; }
        public string Useremail { get; set; }
        public string Passwords { get; set; }
        public string Role { get; set; }
        public int Phone { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
