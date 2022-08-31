using Microsoft.AspNetCore.Authorization;
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
    public class RestaurantController : ControllerBase
    {
        private IRestaurantService RestaurantService { get; set; }

        public RestaurantController(IRestaurantService restaurantService)
        {
            RestaurantService = restaurantService;
        }
        //[AllowAnonymous]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(RestaurantService.Get());
        }
  
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(RestaurantService.GetById(id));
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteById(int id)
        {
            var i = RestaurantService.GetById(id);
            return Ok(RestaurantService.Delete(i));
        }
        [HttpPost]
        public IActionResult Add([FromBody] Restaurant restaurant)
        {
            return Ok(RestaurantService.Post(restaurant));
        }
        [HttpPut("{id}")]
        //, Authorize(Roles = "admin")
        public IActionResult Update(int id, [FromBody] Restaurant restaurant)
        {
            var obj = RestaurantService.GetById(id);
            obj.Restaurantname = restaurant.Restaurantname;
            obj.Restauranttype = restaurant.Restauranttype;
            obj.Images = restaurant.Images;
            obj.Rating = restaurant.Rating;
            obj.Times = restaurant.Times;
            obj.Price = restaurant.Price;
            obj.Coupen = restaurant.Coupen;
            obj.Addresss = restaurant.Addresss;
            obj.Cityid = restaurant.Cityid;
            return Ok(RestaurantService.Put(obj));
        }


    }
}
