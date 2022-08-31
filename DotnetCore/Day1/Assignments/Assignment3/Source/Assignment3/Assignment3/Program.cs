using System;

namespace Assignment3
{
    class Program
    {
        enum weekdays
        {
            sunday = 1,
            monday,
            tuesday,
            wednsday,
            thusday,
            friday,
            saturday
        }
        static void Main(string[] args)
        {
            int days;
            Console.WriteLine("Enter Week Day Number :");
            days = int.Parse(Console.ReadLine());
            //int day = (int)weekdays.monday;
            Console.WriteLine((weekdays)days);
        }
    }
}
 