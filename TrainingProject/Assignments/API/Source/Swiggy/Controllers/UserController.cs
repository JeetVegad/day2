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
    public class UserController : ControllerBase
    {
        private IUserService UserService { get; set; }

        public UserController(IUserService userService)
        {
            UserService = userService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(UserService.Get());
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(UserService.GetById(id));
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteById(int id)
        {
            var i = UserService.GetById(id);
            return Ok(UserService.Delete(i));
        }
        [HttpPost]
        public IActionResult Add([FromBody] User user)
        {
            return Ok(UserService.Post(user));
        }
        //[HttpPut("{id}")]
        //public IActionResult Update(int id, User user)
        //{
        //    var entity = UserService.GetById(id);
        //    return Ok(UserService.Put(entity, user)); 
        //}
       
  
        [HttpPost("login")]

        public  IActionResult Login([FromBody] UserLoginDTO loginDTO)
        { var token =  UserService.Login(loginDTO); 
            if (token == null)
            { 
                return BadRequest();
            } 
            return Ok(token);
        }



    }
}
