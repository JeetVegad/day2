using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SwiggyDemo.Models;
using SwiggyDemo.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiggyDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private ICityService CityService { get; set; }

        public CityController(ICityService cityService)
        {
            CityService = cityService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(CityService.Get());
        }

        [HttpPost]
        public IActionResult Post([FromBody] City city)
        {
            return Ok(CityService.Post(city));
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete(int id)
        {
            var i = CityService.GetById(id);
            return Ok(CityService.Delete(i));
               
        }
        [HttpPut ("{id}")]
        public IActionResult Update(int id, [FromBody] City city)
        {
            var obj = CityService.GetById(id);
            obj.Cityname = city.Cityname;
            return Ok(CityService.Put(obj));
        }
    }
}
