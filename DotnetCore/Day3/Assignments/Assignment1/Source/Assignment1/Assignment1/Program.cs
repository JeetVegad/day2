using System;

namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Employee emp1 = new fulltime();
            emp1.get();
            emp1.display();
            emp1.countSalary();

            Employee emp2 = new parttime();
            emp2.get();
            emp2.display();
            emp2.countSalary();
        }
    }
}
