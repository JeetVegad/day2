using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Practice1.Models;
using Practice1.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private IPersonService PersonService { get; set; }
        public PersonController(IPersonService personService)
        {
            PersonService = personService;
        }
        [HttpGet]

        public IActionResult Get()
        {
            return Ok(PersonService.Get());
        }

        [HttpPost]
        public IActionResult Add([FromBody] Person person)
        {
            return Ok(PersonService.Add(person));
        }

        [HttpGet ("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(PersonService.GetById(id));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(int id)
        {
            var i = PersonService.GetById(id);
            return Ok(PersonService.DeletePerson(i));
        }
    }
}
