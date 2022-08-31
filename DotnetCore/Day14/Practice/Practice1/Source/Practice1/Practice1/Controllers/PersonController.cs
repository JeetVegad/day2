using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Practice1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;
using Microsoft.AspNetCore.JsonPatch;

namespace Practice1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private Crud crud { get; set; }
        public PersonController() {
            crud = new Crud();
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await crud.GetPersons());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await crud.GetPersonById(id));
        }

        [HttpPost]
        public async Task<IActionResult> AddPerson([FromBody] Person person)
        {
            return Ok(await crud.AddPerson(person));

        }
        [HttpPatch("{id}")]
        public async Task<IActionResult> Patchs(int id,[FromBody] JsonPatchDocument<Person> patchperson)
        {
            var person = await crud.GetPersonById(id);
            patchperson.ApplyTo(person);
            return Ok(await crud.UpdatePerson(person));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Updatefullperson(int id, [FromBody] Person person)
        {
            return Ok(await crud.UpdateFullPerson(person));
        }


    }
}
