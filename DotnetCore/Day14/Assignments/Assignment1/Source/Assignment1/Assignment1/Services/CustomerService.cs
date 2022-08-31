using Assignment1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Services
{
    public interface ICustomerService : IRepository<Customer>
    {

    }
    public class CustomerService : Repository<Customer>,ICustomerService

    {
        public CustomerService(ToyCompanyContext toyCompany):base(toyCompany)
        {

        }
    }
}
       