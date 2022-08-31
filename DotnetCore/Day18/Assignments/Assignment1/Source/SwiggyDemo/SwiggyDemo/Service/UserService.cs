using SwiggyDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiggyDemo.Service
{
    public interface IUserService:IRepository<User>
    {

    }
    public class UserService : Repository<User>, IUserService
    {
        public UserService(SwiggyContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
