using SwiggyDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiggyDemo.Service
{
    public interface ICityService : IRepository<City>
    {

    }
    public class CityService : Repository<City>, ICityService
    {
        public CityService(SwiggyContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
