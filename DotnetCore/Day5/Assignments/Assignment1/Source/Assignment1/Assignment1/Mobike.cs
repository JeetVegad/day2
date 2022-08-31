using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment1
{
    class Mobike
    {
        public int NoofDays;
        public long MoNo;
        public string cname, bikeNo;

       public void Input()
        {
            Console.WriteLine("Enter name :");
            cname = Console.ReadLine();
            Console.WriteLine("Enter Mobile number :");
            MoNo = Convert.ToInt64(Console.ReadLine());
            Console.WriteLine("Enter bike no. :");
            bikeNo = Console.ReadLine();
            Console.WriteLine("Enter No of Days");
            NoofDays = Convert.ToInt32(Console.ReadLine());
        }

        public int Compute()
        {
            if (NoofDays <= 5)
            {
                return (NoofDays * 500);
            }
            else if(NoofDays>10){
                return (4500 + (NoofDays - 10) * 200);
            }else if(5<NoofDays && NoofDays <= 10)
            {
                return (2500 + (NoofDays - 5) * 400);
            }
            return 0;
        }
        public void display()
        {
            Console.WriteLine($"Customer Name : {cname}\t Bike no. : {bikeNo}\t Phone No. : {MoNo} \t No of Days:\t {NoofDays} \t Charge : {Compute()}");
        }
    }
}
