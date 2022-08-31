using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            float num1 = 0; float num2 = 0;
            Console.WriteLine("Enter num 1:");
            num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter num 2:");
            num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Choose Operater which operation want to perfom:");
            Console.WriteLine("+ -- Add");
            Console.WriteLine("- -- Subtract");
            Console.WriteLine("* -- Multiply");
            Console.WriteLine("/ -- Division");

            switch (Console.ReadLine())
            {
                case "+":
                    Console.WriteLine($"Result is {num1} + {num2} = " + (num1 + num2));
                    break;

                case "-":
                    Console.WriteLine($"Result is {num1} - {num2} = " + (num1 - num2));
                    break;

                case "*":
                    Console.WriteLine($"Result is {num1} * {num2} = " + (num1 * num2));
                    break;

                case "/":
                    Console.WriteLine($"Result is {num1} / {num2} = " + (num1 / num2));
                    break;
            }

            Console.ReadKey();
        }
    }
}
