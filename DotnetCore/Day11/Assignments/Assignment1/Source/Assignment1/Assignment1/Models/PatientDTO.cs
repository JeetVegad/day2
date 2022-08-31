using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment1
{
    [Keyless]
    public class PatientDTO
    {
        public int PatId { get; set; }

        public int AsiId { get; set; }

        public int DocId { get; set; }

        public char  Gender { get; set; }

        public string PatName { get; set; }
    }
}
