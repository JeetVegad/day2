using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Manufacturingplant
    {
        public Manufacturingplant()
        {
            Toys = new HashSet<Toy>();
        }

        public int Plantid { get; set; }
        public string Plantname { get; set; }
        public int? Typeid { get; set; }

        public virtual Toytype Type { get; set; }
        public virtual ICollection<Toy> Toys { get; set; }
    }
}
