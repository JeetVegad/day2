using System;
using System.Collections.Generic;

#nullable disable

namespace Practice1.Models
{
    public partial class Account
    {
        public Account()
        {
            TransectionCreditAccountNavigations = new HashSet<Transection>();
            TransectionDebitAccountNavigations = new HashSet<Transection>();
        }

        public int AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public int? AccountType { get; set; }
        public int? Balance { get; set; }

        public virtual AccountType AccountTypeNavigation { get; set; }
        public virtual ICollection<Transection> TransectionCreditAccountNavigations { get; set; }
        public virtual ICollection<Transection> TransectionDebitAccountNavigations { get; set; }
    }
}
