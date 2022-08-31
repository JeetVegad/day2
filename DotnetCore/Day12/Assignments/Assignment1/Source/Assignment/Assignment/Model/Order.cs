using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Model
{
    public class Order
    {
        public Order()
        {
            OrderItems = new HashSet<Item>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }

        public int TotalAmount { get; set; }


        public int AddressId { get; set; }
        public int customerId { get; set; }
        public int toyId { get; set; }
        public CustomerAddress CustomerAddress { get; set; }
        public Customer Customer { get; set; }
        public Toy Toy { get; set; }

        public ICollection<Item> OrderItems { get; set; }
    }
}
