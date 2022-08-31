using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface IOrderItemService : IRepository<Orderitem>
    {

    }
    public class OrderItemService : Repository<Orderitem>, IOrderItemService
    {
        public OrderItemService(swiggy2447jeetContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
