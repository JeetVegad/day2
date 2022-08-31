using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Drug
    {
        public int DrugId { get; set; }
        public string DrugName { get; set; }

        public virtual DrugSum DrugSum { get; set; }
    }
}
