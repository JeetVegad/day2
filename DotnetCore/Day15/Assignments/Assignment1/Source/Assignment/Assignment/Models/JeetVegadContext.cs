using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment.Models
{
    public partial class JeetVegadContext : DbContext
    {
        public JeetVegadContext()
        {
        }

        public JeetVegadContext(DbContextOptions<JeetVegadContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AssignmentsMod15> AssignmentsMod15s { get; set; }
        public virtual DbSet<Borrow> Borrows { get; set; }
        public virtual DbSet<Branch> Branches { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<CourseEnrolled> CourseEnrolleds { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Departmentname> Departmentnames { get; set; }
        public virtual DbSet<Deposit> Deposits { get; set; }
        public virtual DbSet<Display> Displays { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Employee1> Employee1s { get; set; }
        public virtual DbSet<Employee2> Employee2s { get; set; }
        public virtual DbSet<Employee3> Employee3s { get; set; }
        public virtual DbSet<Employee5> Employee5s { get; set; }
        public virtual DbSet<EmployeeIncentive> EmployeeIncentives { get; set; }
        public virtual DbSet<EmployeeMod15> EmployeeMod15s { get; set; }
        public virtual DbSet<Exprerience> Expreriences { get; set; }
        public virtual DbSet<FeePayment> FeePayments { get; set; }
        public virtual DbSet<Incentive> Incentives { get; set; }
        public virtual DbSet<Incentivegt3k> Incentivegt3ks { get; set; }
        public virtual DbSet<Job> Jobs { get; set; }
        public virtual DbSet<JobHistory> JobHistories { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Region> Regions { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Assignment");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<AssignmentsMod15>(entity =>
            {
                entity.HasKey(e => e.AssignmentId)
                    .HasName("PK__Assignme__32499E57B1182625");

                entity.ToTable("AssignmentsMod15");

                entity.Property(e => e.AssignmentId).HasColumnName("AssignmentID");

                entity.Property(e => e.ActionCode)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.ActionReasonCode)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.ActualTerminationDate).HasColumnType("date");

                entity.Property(e => e.AssignmentCategory)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentName)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentProjectEndDate).HasColumnType("date");

                entity.Property(e => e.AssignmentStatus)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentTypeId).HasColumnName("AssignmentTypeID");

                entity.Property(e => e.BusinessUnitId).HasColumnName("BusinessUnitID");

                entity.Property(e => e.CreationDate).HasColumnType("date");

                entity.Property(e => e.DefaultExpenseAccount)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.EffectiveEndDate).HasColumnType("date");

                entity.Property(e => e.EffectiveStartDate).HasColumnType("date");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.EndTime)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.GradeId).HasColumnName("GradeID");

                entity.Property(e => e.GradeLadderId).HasColumnName("GradeLadderID");

                entity.Property(e => e.LegalEntityId).HasColumnName("LegalEntityID");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.ManagerAssignmentId).HasColumnName("ManagerAssignmentID");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.AssignmentsMod15s)
                    .HasForeignKey(d => d.EmployeeId)
                    .HasConstraintName("FK__Assignmen__Emplo__308E3499");
            });

            modelBuilder.Entity<Borrow>(entity =>
            {
                entity.HasKey(e => e.Loanno);

                entity.ToTable("BORROW");

                entity.Property(e => e.Loanno)
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("LOANNO");

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BNAME");

                entity.Property(e => e.Cname)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("CNAME");
            });

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.HasKey(e => e.Bname);

                entity.ToTable("BRANCH");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BNAME");

                entity.Property(e => e.City)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("CITY");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.ToTable("countries");

                entity.Property(e => e.CountryId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("COUNTRY_ID");

                entity.Property(e => e.CountryName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("COUNTRY_NAME");

                entity.Property(e => e.RegionId)
                    .HasColumnType("decimal(10, 0)")
                    .HasColumnName("REGION_ID");
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course");

                entity.Property(e => e.CourseId)
                    .ValueGeneratedNever()
                    .HasColumnName("CourseID");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CourseEnrolled>(entity =>
            {
                entity.HasKey(e => e.StudentId);

                entity.ToTable("CourseEnrolled");

                entity.Property(e => e.StudentId)
                    .ValueGeneratedNever()
                    .HasColumnName("StudentID");

                entity.Property(e => e.CourseId).HasColumnName("CourseID");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cname);

                entity.ToTable("CUSTOMER");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CNAME");

                entity.Property(e => e.City)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("CITY");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("departments");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DEPARTMENT_ID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("DEPARTMENT_NAME");

                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LOCATION_ID");

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("MANAGER_ID");
            });

            modelBuilder.Entity<Departmentname>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("departmentname");

                entity.Property(e => e.DepartmentName1)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("department_name");

                entity.Property(e => e.Number).HasColumnName("number");
            });

            modelBuilder.Entity<Deposit>(entity =>
            {
                entity.HasKey(e => e.Actno);

                entity.ToTable("DEPOSIT");

                entity.Property(e => e.Actno)
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("ACTNO");

                entity.Property(e => e.Adate)
                    .HasColumnType("date")
                    .HasColumnName("ADATE");

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BNAME");

                entity.Property(e => e.Cname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("CNAME");
            });

            modelBuilder.Entity<Display>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("display");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("department_name");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("last_name");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Department)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DEPARTMENT");

                entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.JoiningDate)
                    .HasColumnType("date")
                    .HasColumnName("JOINING_DATE");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.ManagerId).HasColumnName("MANAGER_ID");

                entity.Property(e => e.Salary)
                    .HasColumnType("money")
                    .HasColumnName("SALARY");
            });

            modelBuilder.Entity<Employee1>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__employee__CBA14F48B2B83054");

                entity.ToTable("employee1");

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EMPLOYEE_ID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.CommissionPct)
                    .HasColumnType("decimal(2, 2)")
                    .HasColumnName("COMMISSION_PCT");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DEPARTMENT_ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.HireDate)
                    .HasColumnType("date")
                    .HasColumnName("HIRE_DATE");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("JOB_ID");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("MANAGER_ID");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PHONE_NUMBER");

                entity.Property(e => e.Salary)
                    .HasColumnType("decimal(8, 2)")
                    .HasColumnName("SALARY");
            });

            modelBuilder.Entity<Employee2>(entity =>
            {
                entity.HasKey(e => e.Empis)
                    .HasName("PK__employee__AF4CE854B2882FE6");

                entity.ToTable("employee2");

                entity.Property(e => e.Empis).HasColumnName("empis");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("dob");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("firstname");

                entity.Property(e => e.Hiredate)
                    .HasColumnType("date")
                    .HasColumnName("hiredate");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("lastname");

                entity.Property(e => e.Phone).HasColumnName("phone");

                entity.Property(e => e.Salary)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("salary");
            });

            modelBuilder.Entity<Employee3>(entity =>
            {
                entity.HasKey(e => e.Empid)
                    .HasName("PK__employee__AF4CE865901FB0E9");

                entity.ToTable("employee3");

                entity.HasIndex(e => e.Department, "nondepartment");

                entity.HasIndex(e => e.Salary, "nonsalary1");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Department)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("department");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("firstname");

                entity.Property(e => e.Joindate)
                    .HasColumnType("date")
                    .HasColumnName("joindate");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("lastname");

                entity.Property(e => e.Salary)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("salary");
            });

            modelBuilder.Entity<Employee5>(entity =>
            {
                entity.HasKey(e => e.Empid)
                    .HasName("PK__employee__AF4CE865B357F6C9");

                entity.ToTable("employee5");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Department)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("department");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("firstname");

                entity.Property(e => e.Joindate)
                    .HasColumnType("date")
                    .HasColumnName("joindate");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("lastname");

                entity.Property(e => e.Managerid).HasColumnName("managerid");

                entity.Property(e => e.Salary)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("salary");
            });

            modelBuilder.Entity<EmployeeIncentive>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("EmployeeIncentive");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.IncentiveAmount)
                    .HasColumnType("money")
                    .HasColumnName("INCENTIVE_AMOUNT");

                entity.Property(e => e.IncentiveDate)
                    .HasColumnType("date")
                    .HasColumnName("INCENTIVE_DATE");

                entity.Property(e => e.JoiningDate)
                    .HasColumnType("date")
                    .HasColumnName("JOINING_DATE");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.Salary)
                    .HasColumnType("money")
                    .HasColumnName("salary");
            });

            modelBuilder.Entity<EmployeeMod15>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__Employee__7AD04FF10241F333");

                entity.ToTable("EmployeeMod15");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.AddressLine1)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine2)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CitizenShipId).HasColumnName("CitizenShipID");

                entity.Property(e => e.CitizenshipLegislationCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CitizenshipStatus)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CitizenshiptoDate).HasColumnType("date");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CorrespondanceLanguage)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.DisplayName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DriversLicenseExpiryDate).HasColumnType("date");

                entity.Property(e => e.DriversLicenseId).HasColumnName("DriversLicenseID");

                entity.Property(e => e.DriversLicenseIssuingCountry)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EffectiveStartDate).HasColumnType("date");

                entity.Property(e => e.Ethinicity)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HomeFaxCountryCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HomePhoneCountryCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HomePhoneNumber)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Honors)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaritialStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MilitaryVetStatus)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NationalId).HasColumnName("NationalID");

                entity.Property(e => e.NationalIdcountry)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("NationalIDCountry");
            });

            modelBuilder.Entity<Exprerience>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("exprerience");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("department_name");

                entity.Property(e => e.HireDate)
                    .HasColumnType("date")
                    .HasColumnName("hire_date");

                entity.Property(e => e.Name)
                    .HasMaxLength(46)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Salary)
                    .HasColumnType("decimal(8, 2)")
                    .HasColumnName("salary");
            });

            modelBuilder.Entity<FeePayment>(entity =>
            {
                entity.HasKey(e => e.StudentId);

                entity.ToTable("FeePayment");

                entity.Property(e => e.StudentId)
                    .HasMaxLength(10)
                    .HasColumnName("StudentID")
                    .IsFixedLength(true);

                entity.Property(e => e.AmountPaid)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.DateofPayment)
                    .HasMaxLength(10)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<Incentive>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("incentive");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Incamount)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("incamount");

                entity.Property(e => e.Incdate)
                    .HasColumnType("date")
                    .HasColumnName("incdate");

                entity.HasOne(d => d.Emp)
                    .WithMany()
                    .HasForeignKey(d => d.Empid)
                    .HasConstraintName("FK__incentive__empid__43D61337");
            });

            modelBuilder.Entity<Incentivegt3k>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("incentivegt3k");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.IncentiveAmount)
                    .HasColumnType("money")
                    .HasColumnName("INCENTIVE_AMOUNT");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");
            });

            modelBuilder.Entity<Job>(entity =>
            {
                entity.ToTable("jobs");

                entity.Property(e => e.JobId)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("JOB_ID")
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.JobTitle)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false)
                    .HasColumnName("JOB_TITLE");

                entity.Property(e => e.MaxSalary)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("MAX_SALARY");

                entity.Property(e => e.MinSalary)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("MIN_SALARY");
            });

            modelBuilder.Entity<JobHistory>(entity =>
            {
                entity.HasKey(e => new { e.EmployeeId, e.StartDate })
                    .HasName("PK__job_hist__6734C99847AF9F4C");

                entity.ToTable("job_history");

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("START_DATE");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DEPARTMENT_ID");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("END_DATE");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("JOB_ID");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("locations");

                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LOCATION_ID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CITY");

                entity.Property(e => e.CountryId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("COUNTRY_ID");

                entity.Property(e => e.PostalCode)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("POSTAL_CODE");

                entity.Property(e => e.StateProvince)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("STATE_PROVINCE");

                entity.Property(e => e.StreetAddress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("STREET_ADDRESS");
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.ToTable("regions");

                entity.Property(e => e.RegionId)
                    .HasColumnType("decimal(5, 0)")
                    .HasColumnName("REGION_ID");

                entity.Property(e => e.RegionName)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("REGION_NAME");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("Student");

                entity.Property(e => e.StudentId)
                    .ValueGeneratedNever()
                    .HasColumnName("StudentID");

                entity.Property(e => e.StudentName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
