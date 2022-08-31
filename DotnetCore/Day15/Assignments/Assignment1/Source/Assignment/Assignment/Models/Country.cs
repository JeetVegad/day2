using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Country
    {
        public string CountryId { get; set; }
        public string CountryName { get; set; }
        public decimal? RegionId { get; set; }
    }
}
