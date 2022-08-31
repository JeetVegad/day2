using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface IAddressService:IRepository<Address>
    {

    }
    public class AddressService : Repository<Address>, IAddressService
    {
        public AddressService(swiggy2447jeetContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
