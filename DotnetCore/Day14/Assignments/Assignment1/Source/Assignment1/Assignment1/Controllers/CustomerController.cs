using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment1.Services;
using Assignment1.Models;
namespace Assignment1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private ICustomerService CustomerService { get; set; }
        public CustomerController(ICustomerService customerService)
        {
            CustomerService = customerService;
        }
        [HttpGet]

        public IActionResult Get()
        {
            return Ok(CustomerService.Get());
        }
        [HttpPost]
        public IActionResult Add([FromBody] Customer customer)
        {
            return Ok(CustomerService.Add(customer));
        }
        [HttpGet("{id}")]
        public IActionResult GetByuId(int id)
        {
            return Ok(CustomerService.GetById(id));
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteById(int id)
        {
            var i = CustomerService.GetById(id);
            return Ok(CustomerService.DeleteCustomer(i));
        }
    }
}
