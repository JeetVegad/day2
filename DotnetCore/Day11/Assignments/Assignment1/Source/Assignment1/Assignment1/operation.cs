using System;
using System.Collections.Generic;
using System.Text;
using Assignment1.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;


namespace Assignment1
{
    public class operation
    {
        private HospitalContext context { get; set; }
        public operation()
        {
            context = new HospitalContext();
         }

        public void InsertDoctor()
        {
            Doctor doctor = new Doctor();
            Console.WriteLine("Enter Doctor Name :");
            var name = Console.ReadLine();
            doctor.DocName = name;

            Console.WriteLine("Enter Doctor Department ID:");
            var dep = Convert.ToInt32(Console.ReadLine());
            doctor.DepId = dep;

            context.Add(doctor);
            context.SaveChanges();

            Console.WriteLine(doctor.DocName);
        }

        public void updateDoctor()
        {
            Console.WriteLine("Enter Doctor Id You want to update ");
            var n = Convert.ToInt32(Console.ReadLine());
            var doctor = context.Doctors.Where(x => x.DocId == n).FirstOrDefault();

            Console.WriteLine("Enter Doctor name  ");
            var j = Console.ReadLine();
            doctor.DocName = j;

            Console.WriteLine("Enter Department ID");
            var i = Convert.ToInt32(Console.ReadLine());
            doctor.DepId = i;
            context.Update(doctor);
            context.SaveChanges();

        }

        public void deleteDoctor()
        {
            Console.WriteLine("Enter Doctor Id You want to Delete ");
            var n = Convert.ToInt32(Console.ReadLine());
            var doctor = context.Doctors.Where(x => x.DocId == n).FirstOrDefault();

            context.Doctors.Remove(doctor);
            context.SaveChanges();
        }
        public void printreport()
        {
            Console.WriteLine("Enter Doctor Id which patient you need ");
            var n = Convert.ToInt32(Console.ReadLine());

            var patient = context.Patients.Include(p=>p.Asi).Where(p => p.DocId == n).ToList();

            foreach (var item in patient)
            {
                Console.WriteLine($"{item.PatName} {item.PatId} {item.Asi.AsiName}");
            }
        }
        public void printreport2()
        {
            Console.WriteLine("Enter Parient Id:");
            var n = Convert.ToInt32(Console.ReadLine());

            var patient = context.DrugSums.Include(p => p.Pat).Include(d=>d.Drug).Where(p => p.PatId == n).ToList();
            foreach (var item in patient)
            {
                Console.WriteLine($"{item.Pat.PatName} {item.Drug.DrugName}");
            }
        }
        public void printreport3()
        {
            Console.WriteLine("Enter Parient Id:");
            var n = Convert.ToInt32(Console.ReadLine());

            var patient = context.DrugSums.Include(p => p.Pat).Include(d => d.Drug).Where(p => p.PatId == n).ToList();
            foreach (var item in patient)
            {
                Console.WriteLine($"{item.Pat.PatName} {item.Drug.DrugName} {item.DrugTime}");
            }
        }
        public void sp()
        {
            var dto = context.PatientDTOs.FromSqlRaw("exec practice").ToList();

            foreach (var item in dto)
            {
                Console.WriteLine($"{item.AsiId} {item.DocId} {item.Gender} {item.PatName} {item.PatId}");
            }
        }
    }

  
}
