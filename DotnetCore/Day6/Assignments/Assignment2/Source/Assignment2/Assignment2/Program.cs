using System;

namespace Assignment2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter First Number :");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Second Number :");
            int b = Convert.ToInt32(Console.ReadLine());
           

            Func<int, int, int> dlgt = (x, y) => x + y;
            int i = dlgt(a, b);
            Console.WriteLine($"Result is {i}");
        }
    }
}
