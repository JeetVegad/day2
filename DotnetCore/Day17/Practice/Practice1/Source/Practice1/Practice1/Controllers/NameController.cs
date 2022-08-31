using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice1.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NameController : ControllerBase
    {
        private readonly IJWTAuthenticationManager jWTAuthenticationManager;

        public NameController(IJWTAuthenticationManager jWTAuthenticationManager)
        {
            this.jWTAuthenticationManager = jWTAuthenticationManager;
        }
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Bhavanagar", "India" };
        }

        // GET: api/Name/5
       

        [HttpGet("admin"), Authorize(Roles ="Admin")]
        public IEnumerable<string> Get1()
        {
            return new string[] { "Admin", "India" };
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] UserCred userCred ,[FromHeader] string role)
        {
            var token = jWTAuthenticationManager.Authenticate(userCred.Username, userCred.Password,role);
            if (token == null)
                return Unauthorized();
            return Ok(token);
        }

        public class UserCred
        {
            public string Username { get; set; }
            public string Password { get; set; }
        }
    }
}
