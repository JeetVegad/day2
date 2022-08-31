using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Patient
    {
        public Patient()
        {
            DrugSums = new HashSet<DrugSum>();
        }

        public int PatId { get; set; }
        public string PatName { get; set; }
        public string Gender { get; set; }
        public int? AsiId { get; set; }
        public int? DocId { get; set; }

        public virtual Assistant Asi { get; set; }
        public virtual Doctor Doc { get; set; }
        public virtual ICollection<DrugSum> DrugSums { get; set; }
    }
}
