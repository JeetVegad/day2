using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Prepoption
    {
        public Prepoption()
        {
            Customizations = new HashSet<Customization>();
        }

        public int Prepid { get; set; }
        public string Names { get; set; }
        public int? Price { get; set; }

        public virtual ICollection<Customization> Customizations { get; set; }
    }
}
