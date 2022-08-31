using System;
using System.Collections;
namespace Practice2
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack personAge = new Stack();

            personAge.Push(18);
            personAge.Push(19);
            personAge.Push(20);
            personAge.Push(21);
            personAge.Push(22);
            personAge.Push(23);
            personAge.Push(24);
            personAge.Push(25);

            foreach(var item in personAge)
            {
                Console.WriteLine(item);
            }
        }
    }
}
