using System;

namespace Practice1
{
    class Program
    {
        //--------------------Polymorphism --------------- 
        void print(int i, int j)
        {
            Console.WriteLine("Printing int: {0}", (i + j));
        }
        void print(string a, string b)
        {
            Console.WriteLine("Printing String: {0}", (a + b));
        }

        static void Main(string[] args)
        {

            Program prog = new Program();

            // Call print for sum of integers
            prog.print(5, 6);

            // Call to concatenate strings
            prog.print("Hello", "World");
            Console.ReadKey();
        }

        //---------------------Inheritance-------------------

    }
}
