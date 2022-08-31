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
    public class FoodItemController : ControllerBase
    {
        private IFoodItemService FoodItemService { get; set; }

        public FoodItemController(IFoodItemService foodItemService)
        {
            FoodItemService = foodItemService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(FoodItemService.Get());
        }
        [HttpGet("getfooditemmaster")]
        public IActionResult Getfooditemmaster()
        {
            return Ok(FoodItemService.getfooditemmaster());
        }
        [HttpGet("getfooditemmaster/{id}")]
        public IActionResult GetfooditemmasterByid(int id)
        {
            return Ok(FoodItemService.getbyrestaurantid(id));
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(FoodItemService.GetById(id));
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteById(int id)
        {
            var i = FoodItemService.GetById(id);
            return Ok(FoodItemService.Delete(i));
        }
        [HttpPost]
        public IActionResult Add([FromBody] Restaurantfooditem fooditem)
        {
            return Ok(FoodItemService.Post(fooditem));
        }
        [HttpPut("{id}")]
        //public IActionResult Update(int id, Restaurantfooditem  fooditem)
        //{
        //    var entity = FoodItemService.GetById(id);
        //    return Ok(FoodItemService.Put(entity, fooditem));
        //}

        public IActionResult Update(int id, [FromBody] Restaurantfooditem restaurantfooditem)
        {
            var obj = FoodItemService.GetById(id);
            obj.Foodname = restaurantfooditem.Foodname;
            obj.Foodid = restaurantfooditem.Foodid;
            obj.Restaurantid = restaurantfooditem.Restaurantid;
            obj.Price = restaurantfooditem.Price;
            obj.Images = restaurantfooditem.Images;
            obj.Description = restaurantfooditem.Description;
            obj.Images = restaurantfooditem.Images;
            return Ok(FoodItemService.Put(obj));
        }


    }
}
