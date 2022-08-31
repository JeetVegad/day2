using SwiggyDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiggyDemo.Service
{
    public interface IRestaurantService : IRepository<Restaurant>
    {

    }
    public class RestaurantService : Repository<Restaurant>, IRestaurantService
    {
        public RestaurantService(SwiggyContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
    