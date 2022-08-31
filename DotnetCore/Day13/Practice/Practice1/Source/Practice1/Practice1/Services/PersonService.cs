using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Practice1.Models;

namespace Practice1.Services
{
    public interface IPersonService : IRepository<Person>
    {

    }
    public class PersonService : Repository<Person>, IPersonService
    {
        public PersonService(webapipracticeContext webapipractice) : base(webapipractice)
        {
        }
    }
    

}
