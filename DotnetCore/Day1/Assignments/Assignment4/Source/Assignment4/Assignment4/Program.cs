using System;

namespace Assignment4
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many student youu want to Insert :");
            int n = int.Parse(Console.ReadLine());

            Student[] students = new Student[n];
            for (int i = 0; i < n; i++)
            {
                Student student = new Student();
                Console.WriteLine("Enter your name :");
                student.Name = Console.ReadLine();

                Console.WriteLine("Enter your Address :");
                student.Address = Console.ReadLine();


                Console.WriteLine("Enter Marks of Hindi :");
                student.Hindi = int.Parse(Console.ReadLine());

                Console.WriteLine("Enter Marks of English :");
                student.English = int.Parse(Console.ReadLine());

                Console.WriteLine("Enter Marks of Maths :");
                student.Maths = int.Parse(Console.ReadLine());


                students[i] = student;
            }

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine($"Name :{students[i].Name} \t Address :{students[i].Address} \t Hindi :{students[i].Hindi} \t " +
                    $" English :{students[i].English} \t Maths :{students[i].Maths} \t grade :{students[i].grade} \t");
            }
            Console.ReadKey();
        }
    }
}
