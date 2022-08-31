using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Order
    {
        public Order()
        {
            Orderitems = new HashSet<Orderitem>();
        }

        public int Orderid { get; set; }
        public int? Addressid { get; set; }
        public int? Cusid { get; set; }
        public DateTime? Orderdate { get; set; }

        public virtual Cusaddress Address { get; set; }
        public virtual Customer Cus { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
    }
}
