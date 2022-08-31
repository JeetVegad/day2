using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Toytype
    {
        public Toytype()
        {
            Manufacturingplants = new HashSet<Manufacturingplant>();
        }

        public int Typeid { get; set; }
        public string Typename { get; set; }

        public virtual ICollection<Manufacturingplant> Manufacturingplants { get; set; }
    }
}
