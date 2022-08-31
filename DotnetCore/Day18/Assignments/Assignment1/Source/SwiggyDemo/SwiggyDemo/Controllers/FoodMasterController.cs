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
    public class FoodMasterController : ControllerBase
    {
        private IFoodMasterService FoodMasterService { get; set; }
        public FoodMasterController(IFoodMasterService foodMasterService)
        {
            FoodMasterService = foodMasterService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(FoodMasterService.Get());
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(FoodMasterService.GetById(id));
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteById(int id)
        {
            var i = FoodMasterService.GetById(id);
            return Ok(FoodMasterService.Delete(i));
        }
        [HttpPost]
        public IActionResult Add([FromBody] Foodmaster foodmaster)
        {
            return Ok(FoodMasterService.Post(foodmaster));
        }
        [HttpPut("{id}")]
        //public IActionResult Update(int id, Foodmaster foodmaster)
        //{
        //    var entity = FoodMasterService.GetById(id);
        //    return Ok(FoodMasterService.Put(entity, foodmaster));
        //}
        public IActionResult Update(int id, [FromBody] Foodmaster foodmaster)
        {
            var obj = FoodMasterService.GetById(id);
            obj.Foodname = foodmaster.Foodname;
            return Ok(FoodMasterService.Put(obj));
        }

    }
}
