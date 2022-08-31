using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice1
{
    class Program
    {
        static async Task Main(string[] args)
        {
            
            //Method1();
            //Method2();
            await callMethod();
            Console.ReadKey();
            List<int> intCollection = new List<int>()
            {
                1,2,3,2,3,4,4,5,6,3,4,5
            };
            //Using Method Syntax
            //var MS = intCollection.Distinct();
            //Using Query Syntax
            var QS = (from num in intCollection
                      select num).Distinct();
            foreach (var item in QS)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
        
        public static async Task callMethod()
        {
            Method2();
            var count = await Method1();
            Method3(count);
        }

        public static async Task<int> Method1()
        {
            int count = 0;
            await Task.Run(() =>
            {
                for (int i = 0; i < 10; i++)
                {
                    Console.WriteLine("Method 1");
                    count += 1;
                }
            });
            return count;
        }

        public static void Method2()
        {
            for (int i = 0; i < 25; i++)
            {
                Console.WriteLine("Method 2");
            }
        }

        public static void Method3(int count)
        {
            Console.WriteLine("Count is " + count);
        }
        //public static async Task Method1()
        //{
        //    await Task.Run(() =>
        //    {
        //        for (int i = 0; i < 100; i++)
        //        {
        //            Console.WriteLine("Method 1");
        //            Task.Delay(100).Wait();
        //        }
        //    });
        //}

        //public static void Method2()
        //{
        //    for (int i = 0; i < 25; i++)
        //    {
        //        Console.WriteLine("Method 2");

        //        Task.Delay(100).Wait();
        //    }
        //}
        
    }
    public static class StringHElper
    {
        public static string GetUpperCase(this string name)
        {
            return name.ToUpper();
        }
    }
}
