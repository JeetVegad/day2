using System;
using System.Text.RegularExpressions;
namespace Assignment1
{
    class Program
    {
        static void validate(int age)
        {
            if (age < 0)
            {
                throw new AgeException("Age must Greater than zero");
            }
        }

        static void  nameValidate(string name)
        {
            var regex = new Regex(@"^[a-zA-Z]+$",RegexOptions.IgnoreCase);
            if(!regex.IsMatch(name))
            {
                throw new NameException("Please input letters only");
            }
        }
        static void DateValidate(DateTime TodayDate)
        { 
            if (DateTime.Compare( TodayDate ,DateTime.Today) <0)
            {
                throw new DateException("Please Enter valid date");
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the age :");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Name :");
            string input = Console.ReadLine();
            Console.WriteLine("Enter Date :");
            DateTime tdate = Convert.ToDateTime(Console.ReadLine());
            try
            {
                DateValidate(tdate);
                nameValidate(input);
                validate(n);
            }
            catch (AgeException e)
            {
                Console.WriteLine(e.Message);
            }
            catch(NameException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (DateException e)
            {
                Console.WriteLine(e.Message);
            }
        }


    }
}
