using System;
using System.Collections.Generic;

#nullable disable

namespace Practice1.Models
{
    public partial class AccountType
    {
        public AccountType()
        {
            Accounts = new HashSet<Account>();
        }

        public int AccountTypeId { get; set; }
        public string AccountTypeName { get; set; }

        public virtual ICollection<Account> Accounts { get; set; }
    }
}
