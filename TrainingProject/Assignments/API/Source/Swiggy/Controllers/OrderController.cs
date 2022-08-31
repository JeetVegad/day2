using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swiggy.Models;
using Swiggy.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderService OrderService;
        public OrderController(IOrderService orderService)
        {
            OrderService = orderService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(OrderService.Get());
        }
        [HttpPost]
        public IActionResult Post([FromBody] Order order)
        {
            return Ok(OrderService.Post(order));
        }
        
    }
}
