using System;

namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many person you want to insert ? :");
            int n = int.Parse(Console.ReadLine());
            Person[] Obj = new Person[n];

            for (int i = 0; i < n; i++)
            {


                Console.WriteLine("Enter Your FirstName :");
                string FirstName = Console.ReadLine();


                Console.WriteLine("Enter Your LastName :");
                string LastName = Console.ReadLine();


                Console.WriteLine("Enter Your Email Address :");
                string EmailAddress = Console.ReadLine();


                Console.WriteLine("Enter Your DateOfBirth :");
                DateTime DateOfBirth = DateTime.Parse(Console.ReadLine());

                Obj[i] = new Person(FirstName, LastName, EmailAddress, DateOfBirth);
            }

            foreach (var item in Obj)
            {
                Console.WriteLine($"Adult or not : {item.Adult}");

                Console.WriteLine($"SunSign : {item.SunSign}");

                Console.WriteLine($"ChineseSign : {item.ChineseSign}");

                Console.WriteLine($"ScreenName : {item.ScreenName}");
            }
        }
    }
}
