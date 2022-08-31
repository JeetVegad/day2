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
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private IEmployeeService EmployeeService { get; set; }

        public EmployeeController(IEmployeeService employeeService)
        {
            EmployeeService=employeeService  ;
        }
        [HttpGet]

        public IActionResult Get()
        {
            return Ok(EmployeeService.Get());
        }

        [HttpPost]
        public IActionResult Add([FromBody] EmployeeMod15 employee)
        {
            return Ok(EmployeeService.Add(employee));
        }
        [HttpGet ("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(EmployeeService.GetById(id));
        }

        [HttpDelete ("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var i = EmployeeService.GetById(id);
            return Ok(EmployeeService.Delete(i));
        }
    }
}
