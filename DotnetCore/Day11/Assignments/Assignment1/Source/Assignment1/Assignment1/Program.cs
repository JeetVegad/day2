using Assignment1.Models;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {

            operation opera = new operation();
            while (true) {
                Console.WriteLine("Enter Operation you want to perform ");
                Console.WriteLine("1.Insert Doctor");
                Console.WriteLine("2.Update Doctor");
                Console.WriteLine("3.Delete Doctor");
                Console.WriteLine("5.Report 1");
                Console.WriteLine("6.Report 2");
                Console.WriteLine("7.Report 3");
                Console.WriteLine("4.Exit");
                var op = Convert.ToInt32(Console.ReadLine());

                switch (op)
                {
                    case 1:
                        opera.InsertDoctor();
                        break;
                    case 2:
                        opera.updateDoctor();
                        break;
                    case 3:
                        opera.deleteDoctor();
                        break;
                    case 5:
                        opera.printreport();
                        break;
                    case 6:
                        opera.printreport2();
                        break;
                    case 7:
                        opera.printreport3();
                        break;
                    case 8:
                        opera.sp();
                        break;
                    case 4:
                       
                        break;
                    default:
                        break;
                }
                if (op == 4)
                {
                    break;
                }
            };

        }


    }
}
