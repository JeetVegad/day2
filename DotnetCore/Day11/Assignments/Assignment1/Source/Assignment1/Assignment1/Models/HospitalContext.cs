using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment1.Models
{
    public partial class HospitalContext : DbContext
    {
        public HospitalContext()
        {
        }

        public HospitalContext(DbContextOptions<HospitalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Assistant> Assistants { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Drug> Drugs { get; set; }
        public virtual DbSet<DrugSum> DrugSums { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }

        public virtual DbSet<PatientDTO> PatientDTOs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0341\\MSSQL2019;Database=Hospital;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Assistant>(entity =>
            {
                entity.HasKey(e => e.AsiId)
                    .HasName("PK__Assistan__42AA3E4656FE7850");

                entity.ToTable("Assistant");

                entity.Property(e => e.AsiName)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.HasOne(d => d.Dep)
                    .WithMany(p => p.Assistants)
                    .HasForeignKey(d => d.DepId)
                    .HasConstraintName("FK_DepIdOfAsi");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DepId)
                    .HasName("PK__Departme__DB9CAA5FAD3DD32F");

                entity.ToTable("Department");

                entity.Property(e => e.DepName)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(e => e.DocId)
                    .HasName("PK__Doctor__3EF188AD05031891");

                entity.ToTable("Doctor");

                entity.Property(e => e.DocName)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.HasOne(d => d.Dep)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DepId)
                    .HasConstraintName("FK_DepId");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.Property(e => e.DrugName)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DrugSum>(entity =>
            {
                entity.HasKey(e => e.DrugId)
                    .HasName("PK__DrugSum__908D6616BE4D3AC7");

                entity.ToTable("DrugSum");

                entity.Property(e => e.DrugId).ValueGeneratedOnAdd();

                entity.Property(e => e.DrugTime)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.HasOne(d => d.Drug)
                    .WithOne(p => p.DrugSum)
                    .HasForeignKey<DrugSum>(d => d.DrugId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DrugId");

                entity.HasOne(d => d.Pat)
                    .WithMany(p => p.DrugSums)
                    .HasForeignKey(d => d.PatId)
                    .HasConstraintName("FK_PAT_ID");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.HasKey(e => e.PatId)
                    .HasName("PK__Patient__F0DDA9E565FE1327");

                entity.ToTable("Patient");

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.PatName)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.HasOne(d => d.Asi)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.AsiId)
                    .HasConstraintName("FK_PATASI");

                entity.HasOne(d => d.Doc)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DocId)
                    .HasConstraintName("FK_PATDOC");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
