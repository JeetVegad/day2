using System;
using Practice1.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            //var context = new AdventureWorks2016Context();
            //var Emp = context.BusinessEntityAddresses.ToList();
            //Console.WriteLine(Emp);
            Employee employee = new Employee();
            List<HREmp> list = employee.getreport();
 
            foreach (var item in list)
            {
                Console.WriteLine($"{item.BusBusinessEntityId} {item.jobTitle} {item.LoginId}");
            }
        }
    }
}
