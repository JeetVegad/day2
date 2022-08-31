using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class User
    {
        public int Userid { get; set; }
        public string Username { get; set; }
        public string Useremail { get; set; }
        public string Passwords { get; set; }
        public string Role { get; set; }
        public int Phone { get; set; }
    }
}
