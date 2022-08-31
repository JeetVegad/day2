using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Practice1.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductService ProductService { get; set; }

        public ProductController(IProductService productService)
        {
            ProductService= productService  ;

        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(ProductService.Get());
        }
    }
}
