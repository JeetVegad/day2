using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Department
    {
        public Department()
        {
            Assistants = new HashSet<Assistant>();
            Doctors = new HashSet<Doctor>();
        }

        public int DepId { get; set; }
        public string DepName { get; set; }

        public virtual ICollection<Assistant> Assistants { get; set; }
        public virtual ICollection<Doctor> Doctors { get; set; }
    }
}
