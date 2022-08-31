using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment1
{

    interface Emp
    {
        void get();

        void display();

        int countSalary();
    }
    abstract class Employee:Emp
    {
        public int Id;
        public string Name, Address, PAN;

        public virtual void get()
        {
            Console.WriteLine("Enter id:");
            Id =    int.Parse(Console.ReadLine());

            Console.WriteLine("Enter Name :");
            Name = Console.ReadLine();


            Console.WriteLine("Enter Address :");
            Address = Console.ReadLine();


            Console.WriteLine("Enter Pan number :");
            PAN = Console.ReadLine();
        } 

        public virtual void display()
        {
            Console.WriteLine($"Id : {Id}\t Name : {Name}\t Address : {Address} \t PAN:{PAN} \t");
        }
        public abstract int countSalary();
    }
    class parttime:Employee
    {

        public int noofhours, salperhour;

        public override void get()
        {
            base.get();
            Console.WriteLine("Enter No of Hours:");
            noofhours = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter Salary per Hour:");
            salperhour = int.Parse(Console.ReadLine());

        }
        public override void display()
        {
            base.display();
            Console.WriteLine($"No of Hours : {noofhours}\t Salary per hour : {salperhour} \t salary : {countSalary()}");
        }
        public override int  countSalary()
        {
           return  noofhours * salperhour;
        }
    }

    class fulltime : Employee
    {

        public int Basic,HRA,TA, DA;

        public override void get()
        {
            base.get();
            Console.WriteLine("Enter Basic:");
            Basic = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter HRA:");
            HRA = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter TA:");
            TA = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter DA:");
            DA = int.Parse(Console.ReadLine());

        }
        public override void display()
        {
            base.display();
            Console.WriteLine($"Basic : {Basic}\t HRA : {HRA} \t TA : {TA} \t DA : {DA} \t salary : {countSalary()}");
        }
        public override int countSalary()
        {
            return Basic + HRA + TA + DA;
        }
    }
}
