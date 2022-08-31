using System;
namespace Assignment1
{
    public delegate int sampledeleggate(int a, int b);

    class Program
    {
        static void Main(string[] args)
        {
         //-----------------------------------------------------
            int result = 0;
            sampledeleggate dlg = area;
            result = dlg(10 , 20);
            Console.WriteLine($"Result is {result}");
            //--------------------------------------------------
            Func<int, int, int> dlgt = area;
            result = dlgt(10, 20);
            Console.WriteLine($"Result is {result}");
            //---------------------------------------------------------------------
            Func<int, int, int> dlgt1 = delegate (int x, int y)
              {
                  return x * y;
              };
            int i = dlgt1(10, 20);
            Console.WriteLine($"Result is {i}");
            //-----------------------------------------------
            Func<int, int, int> dlgt2 = (c, d) => c * d;
            int j = dlgt2(10, 20);
            Console.WriteLine($"Result is {j}");

        }
        public static int area(int l,int b)
        {
            Console.WriteLine("Enter First Number :");
            l  = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter First Number :");
             b = Convert.ToInt32(Console.ReadLine());
            return l * b;
        }
    }
}
