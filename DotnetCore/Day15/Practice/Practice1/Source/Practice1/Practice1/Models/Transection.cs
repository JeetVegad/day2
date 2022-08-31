using System;
using System.Collections.Generic;

#nullable disable

namespace Practice1.Models
{
    public partial class Transection
    {
        public int TransectionId { get; set; }
        public int? DebitAccount { get; set; }
        public int? CreditAccount { get; set; }
        public int? Amount { get; set; }

        public virtual Account CreditAccountNavigation { get; set; }
        public virtual Account DebitAccountNavigation { get; set; }
    }
}
