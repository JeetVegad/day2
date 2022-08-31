using System;
using System.IO;
namespace Practice1
{
    class Program
    {
        class WriteToFile
        {
            public void Data()
            {
                StreamWriter sw = new StreamWriter("C://geeksforgeeks.txt");

                // To write on the console screen
                Console.WriteLine("Enter the Text that you want to write on File");

                // To read the input from the user
                string str = Console.ReadLine();

                // To write a line in buffer
                sw.WriteLine(str);

                // To write in output stream
                sw.Flush();

                // To close the stream
                sw.Close();
            }
        }
        static void Main(string[] args)
        {
            WriteToFile wr = new WriteToFile();
            wr.Data();
            Console.ReadKey();
        }
    }
}
