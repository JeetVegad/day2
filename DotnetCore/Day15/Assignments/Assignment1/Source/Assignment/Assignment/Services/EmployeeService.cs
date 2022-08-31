using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Services
{
    public interface IEmployeeService : IRepository<EmployeeMod15>
    {

    }
    public class EmployeeService : Repository<EmployeeMod15>, IEmployeeService
    {
        public EmployeeService(JeetVegadContext jeetVegad) : base(jeetVegad)
        {
        }
    }

}
