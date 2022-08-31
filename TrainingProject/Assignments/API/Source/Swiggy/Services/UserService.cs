using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface IUserService : IRepository<User>
    {
        Tokens Login(UserLoginDTO loginDTO);
    }
    public class UserService : Repository<User>, IUserService
    {
                private readonly IJWTManagerRepository _jWTManagerRepository;

        public UserService(swiggy2447jeetContext swiggy2447,IJWTManagerRepository jWTManagerRepository) : base(swiggy2447)
        {
            this._jWTManagerRepository = jWTManagerRepository;
        }
        public Tokens Login(UserLoginDTO loginDTO)
        {
            var token = this._jWTManagerRepository.Authenticate(loginDTO, null);
            return token;
        }
    }
}
