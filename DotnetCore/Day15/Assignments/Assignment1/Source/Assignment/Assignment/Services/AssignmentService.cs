using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Services
{
    public interface IAssignmentService : IRepository<AssignmentsMod15>
    {

    }
    public class AssignmentService : Repository<AssignmentsMod15>, IAssignmentService
    {
        public AssignmentService(JeetVegadContext jeetVegad) : base(jeetVegad)
        {
        }
    }

}
