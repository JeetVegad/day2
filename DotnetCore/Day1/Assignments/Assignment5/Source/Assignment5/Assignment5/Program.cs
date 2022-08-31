using System;

namespace Assignment5
{
    class Program
    {
        static void Main(string[] args)
        {
            int age;
            int a = 18;
            Console.WriteLine("Enter Your Age :");
            age = int.Parse(Console.ReadLine());
            string result;
            result = (age >= a) ? "You are eligible for voting" : "You are not eligible for voting";
            Console.WriteLine(result);
        }
    }
}
