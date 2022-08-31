using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Practice1.Models;

namespace Practice1
{

    public class Crud
    {
        private webapipracticeContext context { get; set; }
        public Crud()
        {
            context = new webapipracticeContext();
        }
        public async Task<List<Person>> GetPersons()
        {
            var person = await (from emp in context.People
                                select new Person
                                {
                                    PesrsonId = emp.PesrsonId,
                                    Age = emp.Age,
                                    Gender = emp.Gender,
                                    Fname = emp.Fname,
                                    Lname = emp.Lname,
                                    EmpNo = emp.EmpNo
                                }
                                ).ToListAsync();
                   return person;
        } 
        public async Task<Person> GetPersonById(int id)
        {
            var person = await (from emp in context.People
                                where emp.PesrsonId == id
                                select emp
                                ).SingleAsync();
            return person;
        }

        public async Task<int> AddPerson(Person person)
        {
            context.Add(person);
           await context.SaveChangesAsync();
            return person.PesrsonId;
        }

        public async Task<int> UpdatePerson(Person person)
        {
            context.Update(person);
            await context.SaveChangesAsync();
            return person.PesrsonId;
        }

        public async Task<Person> UpdateFullPerson(Person person)
        {
            var existinguser = await context.People.Where(p => p.PesrsonId == person.PesrsonId).FirstOrDefaultAsync();
            existinguser.Fname = person.Fname;
            existinguser.Lname = person.Lname;
            existinguser.Gender = person.Gender;
            existinguser.EmpNo = person.EmpNo;
            existinguser.Age = person.Age;
            await context.SaveChangesAsync();
            return person;
        }


    }
}