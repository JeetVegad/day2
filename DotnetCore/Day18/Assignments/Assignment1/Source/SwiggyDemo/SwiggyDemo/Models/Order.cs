using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Order
    {
        public Order()
        {
            Orderitems = new HashSet<Orderitem>();
            Payments = new HashSet<Payment>();
        }

        public int Orderid { get; set; }
        public int? Restaurantid { get; set; }
        public int? Customerid { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Restaurant Restaurant { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
