using System;

namespace _1
{
    class Program
    {
        static void Main(string[] args)
        {

            int userInput;
            Console.Write("Enter a Number : ");
            userInput = int.Parse(Console.ReadLine());
            if (userInput % 2 == 0)
            {
                Console.Write("Entered Number is an Even Number \n");
            }
            else
            {
                Console.Write("Entered Number is an Odd Number \n");
            }
        }
    }
}
