using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Model
{
    public class CustomerAddress
    {
        public CustomerAddress()
        {
            Orders = new HashSet<Order>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CustomerAddressId { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        [MaxLength(6)]
        public string Pincode { get; set; }
        [Required]
        [MaxLength(25)]
        public string state { get; set; }
        [Required]
        [MaxLength(50)]
        public string Country { get; set; }
        public int CustomerId { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
