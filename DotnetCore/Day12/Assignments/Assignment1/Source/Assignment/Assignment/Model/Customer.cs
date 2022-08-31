using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Model
{
    public class Customer
    {
        public Customer()
        {
            Addresses = new HashSet<CustomerAddress>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CustomerId { get; set; }

        public string CustomerName { get; set; }
        public string Gender { get; set; }
        [Required]
        [MaxLength(10)]
        public string PhoneNo { get; set; }
        public ICollection<Order> Orders { get; set; }
        public virtual ICollection<CustomerAddress> Addresses { get; set; }
    }
}
