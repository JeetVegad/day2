using System;
using System.Collections.Generic;

#nullable disable

namespace SwiggyDemo.Models
{
    public partial class Payment
    {
        public int Paymentid { get; set; }
        public int Orderid { get; set; }
        public DateTime? Orderdate { get; set; }
        public int Totalnetpay { get; set; }
        public string Statuss { get; set; }
        public string Paymenttype { get; set; }

        public virtual Order Order { get; set; }
    }
}
