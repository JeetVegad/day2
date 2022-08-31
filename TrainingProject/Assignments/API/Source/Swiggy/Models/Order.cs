using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Order
    {
        public Order()
        {
            Orderitems = new HashSet<Orderitem>();
            Payments = new HashSet<Payment>();
        }

        public int Orderid { get; set; }
        public int? Userid { get; set; }
        public int Addid { get; set; }
        public int Total { get; set; }
        public DateTime? Orderdate { get; set; }

        public virtual Address Add { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
