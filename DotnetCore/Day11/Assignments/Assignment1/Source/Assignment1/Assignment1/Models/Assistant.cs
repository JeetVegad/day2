using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Assistant
    {
        public Assistant()
        {
            Patients = new HashSet<Patient>();
        }

        public int AsiId { get; set; }
        public string AsiName { get; set; }
        public int? DepId { get; set; }

        public virtual Department Dep { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
