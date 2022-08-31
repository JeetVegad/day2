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
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IJWTManagerRepository _jWTManager;

        public AuthController(IJWTManagerRepository jWTManager)
        {
            this._jWTManager = jWTManager;
        }
        //[AllowAnonymous]
        //[HttpPost]
        //[Route("authenticate")]
        //public IActionResult Authenticate(User usersdata)
        //{
        //    var token = _jWTManager.Authenticate(usersdata);

        //    if (token == null)
        //    {
        //        return Unauthorized();
        //    }

        //    return Ok(token);
        //}

    }
}
