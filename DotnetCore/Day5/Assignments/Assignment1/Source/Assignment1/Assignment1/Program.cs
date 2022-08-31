using System;
using System.Collections.Generic;
using System.Linq;

namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Mobike> lmb = new List<Mobike>();

            while (true)
            {
                Console.WriteLine("-----------------------------------------------------------------------------------------------------------------------");
                Console.WriteLine("1.Add Details:");
                Console.WriteLine("2.Display Details");
                Console.WriteLine("3.Delete Entry");
                Console.WriteLine("4.Search Entry");
                Console.WriteLine("5.Edit Entry");
                Console.WriteLine("6.Exit");
                Console.WriteLine("Enter Operation you want to Perform");
                int op = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("-----------------------------------------------------------------------------------------------------------------------");

                switch (op)
                {
                    case 1:
                        Mobike mb = new Mobike();
                        mb.Input();
                        lmb.Add(mb);
                        break;
                    case 2:
                        if (lmb.Count == 0)
                        {
                            Console.WriteLine("No record Found");
                        }
                        else
                        {
                            foreach (var item in lmb)
                            {
                                item.display();
                            }
                        }
                        break;
                    case 3:
                        Console.WriteLine("Enter Bike no to remove :");
                        string rm = Console.ReadLine();
                        Mobike removedele = null;
                        foreach (var item in lmb)
                        {
                            if(item.bikeNo == rm)
                            {
                                removedele = item ;
                            }
                        }
                        lmb.Remove(removedele);
                        break;
                    case 4:
                        Console.WriteLine("Enter Bike no to search :");
                        string sr = Console.ReadLine();
                        foreach (var item in lmb)
                        {
                            if (item.bikeNo == sr)
                            {
                                item.display();
                            }
                        }
                        break;
                    case 5:
                       
                        Console.WriteLine("Enter Bike no to Edit :");
                        
                            string ed = Console.ReadLine();
                            var items = lmb.FirstOrDefault(o => o.bikeNo == ed);
                            if (items != null)
                            {
                                while (true)
                                {
                                    Console.WriteLine("Enter information you want to edit :");
                                    Console.WriteLine("1.Edit customer NAme");
                                    Console.WriteLine("2.Edit mobile number");
                                    Console.WriteLine("3.Edit No of Days");
                                    Console.WriteLine("4.Save and Exit");
                                    int opp = Convert.ToInt32(Console.ReadLine());
                                    switch (opp)
                                    {
                                        case 1:
                                            Console.WriteLine("Enter Customer name:");
                                            items.cname = Console.ReadLine();
                                            break;
                                        case 2:
                                            Console.WriteLine("Enter Mobile Number:");
                                            items.MoNo = Convert.ToInt64(Console.ReadLine());

                                            break;
                                        case 3:
                                            Console.WriteLine("Enter No of Days:");
                                            items.NoofDays = Convert.ToInt32(Console.ReadLine());
                                            break;
                                        case 4:
                                            break;
                                        default:
                                            break;
                                    }
                                    if (opp == 4)
                                    {
                                        break;
                                    }
                                }

                            }
                            else
                            {
                                Console.WriteLine("Record not found!!");
                            }
                        break;
                    case 7:
                        break;
                    default:
                        break;
                }
                if (op == 6)
                {
                    break;
                }
            }
        }
    }
}
