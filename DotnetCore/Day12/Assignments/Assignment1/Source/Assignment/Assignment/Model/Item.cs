using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Model
{
    public class Item
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ItemId { get; set; }
        public int OrderId { get; set; }

        public Order Order { get; set; }

        public int ToyId { get; set; }

        public Toy Toy { get; set; }

        public byte Quantity { get; set; }
    }
}
