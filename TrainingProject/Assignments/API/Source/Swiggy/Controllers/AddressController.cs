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
    public class AddressController : ControllerBase
    {
        public IAddressService AddressService;

        public AddressController(IAddressService addressService)
        {
            AddressService = addressService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(AddressService.Get());
        }
        [HttpGet("{id}")]
        public IActionResult GetByid(int id)
        {
            return Ok(AddressService.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Address address)
        {
            return Ok(AddressService.Post(address));
        }
    }
}
