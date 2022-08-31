using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            Patients = new HashSet<Patient>();
        }

        public int DocId { get; set; }
        public string DocName { get; set; }
        public int? DepId { get; set; }

        public virtual Department Dep { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
