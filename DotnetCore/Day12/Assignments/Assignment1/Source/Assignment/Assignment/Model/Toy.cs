using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Model
{
    public class Toy
    {
        public Toy()
        {
            OrderItems = new HashSet<Order>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ToyId { get; set; }
        [Required]

        public string ToyName { get; set; }
        [Required]
        public int Price { get; set; }
        public int ToyQuantity { get; set; }
        [Required]

        public bool IsAvailable { get; set; }

        public int PlantId { get; set; }
        public ToyPlant Plant { get; set; }

        public ICollection<Order> OrderItems { get; set; }
    }
}
