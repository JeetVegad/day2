using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Services
{
    public interface IOrderService : IRepository<Order> { }
    public class OrderService : Repository<Order>,IOrderService
    {
        public OrderService(swiggy2447jeetContext swiggy2447) : base(swiggy2447)
        {
        }
    }
}
