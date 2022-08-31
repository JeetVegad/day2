using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Model
{
    public class ToyPlant
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PlantId { get; set; }

        [Required]
        [MaxLength(25)]
        public string PlantName { get; set; }

        [Required]
        [MaxLength(50)]
        public string PlantAddress { get; set; }

        [Required]
        [MaxLength(6)]
        public string Pincode { get; set; }
        [Required]
        [MaxLength(25)]
        public string State { get; set; }


        [Required]
        [MaxLength(50)]
        public string Country { get; set; }

        public ICollection<Toy> Toys { get; set; }
    }
}
