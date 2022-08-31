using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface IFoodMasterService : IRepository<Foodmaster>
    {

    }
    public class FoodMasterService : Repository<Foodmaster>, IFoodMasterService
    {
        public FoodMasterService(swiggy2447jeetContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
