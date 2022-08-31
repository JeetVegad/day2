using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swiggy.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemController : ControllerBase
    {
        private IOrderItemService OrderItemService;

        public OrderItemController(IOrderItemService orderItemService)
        {
            OrderItemService = orderItemService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(OrderItemService.Get());
        }
    }
}
