using SwiggyDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiggyDemo.Service
{
    public interface IFoodMasterService : IRepository<Foodmaster>
    {

    }
    public class FoodMasterService : Repository<Foodmaster>, IFoodMasterService
    {
        public FoodMasterService(SwiggyContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
