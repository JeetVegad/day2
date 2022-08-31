using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Practice1.Models;
namespace Practice1.Services
{
    public interface IProductService : IRepository<Product>
    {

    }
    public class Productservice : Repository<Product>, IProductService
    {
        public Productservice(AdventureWorks2016Context adventureWorks2016):base(adventureWorks2016)
        {

        }
    }
}
