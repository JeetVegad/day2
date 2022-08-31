using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class DrugSum
    {
        public int DrugId { get; set; }
        public int? PatId { get; set; }
        public string DrugTime { get; set; }

        public virtual Drug Drug { get; set; }
        public virtual Patient Pat { get; set; }
    }
}
