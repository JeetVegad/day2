using Microsoft.EntityFrameworkCore;
using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface IFoodItemService : IRepository<Restaurantfooditem>
    {
        public dynamic getfooditemmaster();
        public dynamic getbyrestaurantid(int id);
    }
    public class FoodItemService : Repository<Restaurantfooditem>, IFoodItemService
    {
        public swiggy2447jeetContext DBContext { get; set; }
        public FoodItemService(swiggy2447jeetContext swiggy2447) : base(swiggy2447)
        {
            DBContext = swiggy2447;
        }

        public dynamic getfooditemmaster()
        {
            return DBContext.Restaurantfooditems.Include(a => a.Restaurant).Select(a => new
            {

                Fooditemid = a.Fooditemid,
                Foodname = a.Foodname,
                Price = a.Price,
                Restaurantid = a.Restaurant.Restaurantid,
                Restaurant = a.Restaurant.Restaurantname,
                FoodImage = a.Images

            });
        }

        public dynamic getbyrestaurantid(int id)
        {
            return DBContext.Restaurantfooditems.Include(a => a.Restaurant).Select(a => new
            {

                Fooditemid = a.Fooditemid,
                Foodname = a.Foodname,
                Price = a.Price,
                Restaurantid = a.Restaurant.Restaurantid,
                Restaurant = a.Restaurant.Restaurantname,
                FoodImage = a.Images
            }).Where(c => c.Restaurantid == id);
        }
    }
}
