using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface IRestaurantService : IRepository<Restaurant>
    {

    }
    public class RestaurantService : Repository<Restaurant>, IRestaurantService
    {
        public RestaurantService(swiggy2447jeetContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
