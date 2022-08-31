using System;
using System.Collections.Generic;
namespace Practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> StdName = new List<string>();
            StdName.Add("Jeet");
            StdName.Add("Akash");
            StdName.Add("Nidhi");
            StdName.Add("Nikhil");
            StdName.Add("Himanshu");

            StdName.ForEach(Console.WriteLine);

            Console.WriteLine("Enter Element :");
            string item = Console.ReadLine();
            int index = StdName.IndexOf(item);
            if (index != -1)
            {
                Console.WriteLine($"Element {item} is found at index {index}");
            }
            else
            {
                Console.WriteLine("Element not Found in Given List");
            }
        }
    }
}
