using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

using System.Linq.Expressions;
namespace Practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = { "Bill", "Steeve", "james", "Mohan" };


            var myLinquery = from name in names
                             where name.Contains('a')
                             select name;
            foreach (var name in myLinquery)
                Console.WriteLine(name + " ");
            Student[] studentArray =
          {
            new Student() { StudentID = 1, StudentName = "John", Age = 18 },
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 },
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 },
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 },
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 },
            new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 },
            new Student() { StudentID = 7, StudentName = "Rob",Age = 19  },
        };
            Student[] students = new Student[10];

            int i = 0;

            foreach (Student std in studentArray)
            {
                if (std.Age > 12 && std.Age < 20)
                {
                    students[i] = std;
                    i++;
                }
            }
            Func<Student, bool> isTeenAger = delegate (Student s)
             {
                 return s.Age > 12 && s.Age < 20;
             };
            var filterResult = from s in studentArray
                               where isTeenAger(s)
                               select s;
            foreach (var item in filterResult)
            {
                Console.WriteLine(item.StudentName);
            }

            IList list = new ArrayList();
            list.Add(0);
            list.Add("Zero");
            list.Add(new Student() { StudentID = 1 ,StudentName="Bill"}) ;

            var stringResult = from s in list.OfType<string>()
                               select s;
            var intResut = from s in list.OfType<int>()
                           select s;

            Display(stringResult);
          

            foreach (var item in stringResult)
            {
                Console.WriteLine($"{item}");
            }
            foreach (var item in intResut)
            {
                Console.WriteLine($"{item}");
            }
            var StudentiOrder = students.OrderBy(s => s.StudentName);

            var thenbResult = students.OrderBy(s => s.StudentName).ThenBy(s => s.Age);

            foreach (var item in thenbResult)
            {
                Console.WriteLine($"{item.StudentName},{item.Age}");
            }
        }

        private static void Display(IEnumerable<string> stringResult)
        {
            foreach (var item in stringResult)
            {
                Console.WriteLine(item);
            }
        }

      
        class Student
        {
            public int StudentID { get; set; }
            public string StudentName { get; set; }
            public int Age { get; set; }
        }
    }
}
