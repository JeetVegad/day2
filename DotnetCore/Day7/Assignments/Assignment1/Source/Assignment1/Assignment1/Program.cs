using System;
using System.Linq;
using System.Linq.Expressions;
using System.Collections;
using System.Collections.Generic;
namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
                new Employee() { ID = 1, FirstName = "John", LastName = "Abraham", Salary = 1000000, JoiningDate = new DateTime(2013, 1, 1), Deparment = "Banking" },
                new Employee() { ID = 2, FirstName = "Michael", LastName = "Clarke", Salary = 800000, JoiningDate = new DateTime(), Deparment = "Insurance" },
                new Employee() { ID = 3, FirstName = "oy", LastName = "Thomas", Salary = 700000, JoiningDate = new DateTime(), Deparment = "Insurance" },
                new Employee() { ID = 4, FirstName = "Tom", LastName = "Jose", Salary = 600000, JoiningDate = new DateTime(), Deparment = "Banking" },
                new Employee() { ID = 4, FirstName = "TestName2", LastName = "HEllo", Salary = 600000, JoiningDate = new DateTime(2013, 1, 1), Deparment = "Services" }
            };
            List<Incentive> incentives = new List<Incentive>()
            {
                new Incentive() { ID = 1, IncentiveAmount = 5000, IncentiveDate = new DateTime(2013, 02, 02) },
                new Incentive() { ID = 2, IncentiveAmount = 10000, IncentiveDate = new DateTime(2013, 02, 4) },
                new Incentive() { ID = 1, IncentiveAmount = 6000, IncentiveDate = new DateTime(2012, 01, 5) },
                new Incentive() { ID = 2, IncentiveAmount = 3000, IncentiveDate = new DateTime(2012, 01, 5) }
            };

            var query1 = from s in employees
                         where s.FirstName == "John"
                         select s;
            query1.ToList().ForEach(s => Console.WriteLine($"{s.FirstName} {s.LastName} {s.JoiningDate} {s.Deparment}"));
            Console.WriteLine("----------------------------------------------------------------------------");
            var Query2 = from s in employees
                         select s;
            Query2.ToList().ForEach(s => Console.WriteLine($"{s.FirstName} {s.LastName}"));

            var query3 = employees.Join(incentives,
                s1 => s1.ID,
                s2 => s2.ID,
                (s1, s2) => new
                {
                    s1.FirstName,
                    s2.IncentiveAmount
                });

            query3.ToList().ForEach(s => Console.WriteLine($"{s.FirstName} {s.IncentiveAmount}"));
            Console.WriteLine("----------------------------------------------------------------------------");

            //var query4 = from s in employees
            //             group s by s.Salary;
            //foreach(var s in query4)
            //{
            //    Console.WriteLine($"{s.Key}");

            //    foreach (Employee e in s)

            //        Console.WriteLine(e.Salary);

            //}
            var query4 = (employees.GroupBy(i => i.Deparment).Select(g => new
            {
                Department = g.Key,

                Salary = g.Max(j => j.Salary)
            })).OrderBy(k => k.Salary);
            foreach (var item in query4)
            {
                Console.WriteLine($"{item.Department} , {item.Salary}");
            }
            Console.WriteLine("----------------------------------------------------------------------------");
            var query5 = employees
                .GroupBy(e => e.Deparment)
                .Select(

                grp => new { grp.Key, salary = grp.Sum(s => s.Salary) }
                )
                .Where(e => e.salary > 800000)
                .OrderByDescending(k => k.salary);
            Console.WriteLine($"{"Department",20} | {"Sum of Salary",20}");

            foreach (var item in query5)
            {
                Console.WriteLine($"{item.Key,20} | {item.salary,20}");
            }
            Console.WriteLine("---------------------------------------------------------------");
            var QUERY5 = from e in employees
                         group e by e.Deparment
                         into grp
                         select new
                         {
                             Department = grp.Key,
                             Totalsalary = grp.Sum(s => s.Salary)
                            
                         } into result
                        where result.Totalsalary>800000
                        select result;

            foreach (var item in QUERY5)
            {
                Console.WriteLine(item);
            }


            var query6 = employees.GroupJoin(incentives,

                    emp => emp.ID,
                    inc => inc.ID,
                    (emps, incgrp) => new
                    {
                        incentiveamount = incgrp,
                        firstname = emps.FirstName
                    });
            foreach (var item in query6)
            {
                Console.WriteLine(item.firstname);

                foreach (var items in item.incentiveamount)
                {
                    Console.WriteLine(items.IncentiveAmount);
                }
            }
    }
    }
}
   

