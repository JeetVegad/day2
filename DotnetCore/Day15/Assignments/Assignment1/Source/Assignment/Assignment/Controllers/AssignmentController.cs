using Assignment.Models;
using Assignment.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Route("api/emps/{eid}/[controller]")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        private IAssignmentService AssignmentService { get; set; }

        public AssignmentController(IAssignmentService assignmentService)
        {
            AssignmentService= assignmentService  ;
        }

        [HttpGet]
        public IActionResult Get(int eid)
        {
            return Ok(AssignmentService.Get().Where(a=>a.EmployeeId==eid).ToList());
        }
        [HttpPost]
        public IActionResult Add([FromBody] AssignmentsMod15 assignments)
        {
            return Ok(AssignmentService.Add(assignments));
        }
        [HttpGet ("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(AssignmentService.GetById(id));
        }

        [HttpDelete]

        public IActionResult Delete(int id)
        {
            var i = AssignmentService.GetById(id);
            return Ok(AssignmentService.Delete(i));
        }
        [HttpPut ("{id}")]

        public IActionResult Put(int id,AssignmentsMod15 assi)
        {
            var ass1 = AssignmentService.GetById(id);
            return Ok(AssignmentService.Put(ass1, assi));
        }
    }
}
