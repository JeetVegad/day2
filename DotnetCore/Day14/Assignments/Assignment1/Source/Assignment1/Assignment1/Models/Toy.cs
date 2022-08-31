using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Toy
    {
        public Toy()
        {
            Orderitems = new HashSet<Orderitem>();
        }

        public int Toyid { get; set; }
        public string Toyname { get; set; }
        public int? Plantid { get; set; }
        public decimal? Toyprice { get; set; }

        public virtual Manufacturingplant Plant { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
    }
}
