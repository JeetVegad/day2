using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment1.Models
{
    public partial class ToyCompanyContext : DbContext
    {
        public ToyCompanyContext()
        {
        }

        public ToyCompanyContext(DbContextOptions<ToyCompanyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cusaddress> Cusaddresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Manufacturingplant> Manufacturingplants { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Orderitem> Orderitems { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<Toytype> Toytypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Toys");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Cusaddress>(entity =>
            {
                entity.HasKey(e => e.Addressid)
                    .HasName("PK__CUSADDRE__DE5657C19042F45B");

                entity.ToTable("CUSADDRESS");

                entity.Property(e => e.Addressid).HasColumnName("ADDRESSID");

                entity.Property(e => e.Addressname)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESSNAME");

                entity.Property(e => e.Cusid).HasColumnName("CUSID");

                entity.HasOne(d => d.Cus)
                    .WithMany(p => p.Cusaddresses)
                    .HasForeignKey(d => d.Cusid)
                    .HasConstraintName("FK__CUSADDRES__ADDRE__412EB0B6");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cusid)
                    .HasName("PK__CUSTOMER__C59EE6AE54B00A24");

                entity.ToTable("CUSTOMER");

                entity.Property(e => e.Cusid).HasColumnName("CUSID");

                entity.Property(e => e.Cusemail)
                    .HasMaxLength(35)
                    .IsUnicode(false)
                    .HasColumnName("CUSEMAIL");

                entity.Property(e => e.Cusname)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("CUSNAME");

                entity.Property(e => e.Cusphone).HasColumnName("CUSPHONE");
            });

            modelBuilder.Entity<Manufacturingplant>(entity =>
            {
                entity.HasKey(e => e.Plantid)
                    .HasName("PK__MANUFACT__EB3DC0C80B19272F");

                entity.ToTable("MANUFACTURINGPLANT");

                entity.Property(e => e.Plantid).HasColumnName("PLANTID");

                entity.Property(e => e.Plantname)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("PLANTNAME");

                entity.Property(e => e.Typeid).HasColumnName("TYPEID");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.Manufacturingplants)
                    .HasForeignKey(d => d.Typeid)
                    .HasConstraintName("FK__MANUFACTU__TYPEI__38996AB5");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("ORDERS");

                entity.Property(e => e.Orderid).HasColumnName("ORDERID");

                entity.Property(e => e.Addressid).HasColumnName("ADDRESSID");

                entity.Property(e => e.Cusid).HasColumnName("CUSID");

                entity.Property(e => e.Orderdate)
                    .HasColumnType("datetime")
                    .HasColumnName("ORDERDATE")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.Addressid)
                    .HasConstraintName("FK__ORDERS__ADDRESSI__44FF419A");

                entity.HasOne(d => d.Cus)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.Cusid)
                    .HasConstraintName("FK__ORDERS__CUSID__45F365D3");
            });

            modelBuilder.Entity<Orderitem>(entity =>
            {
                entity.ToTable("ORDERITEM");

                entity.Property(e => e.Orderitemid).HasColumnName("ORDERITEMID");

                entity.Property(e => e.Orderid).HasColumnName("ORDERID");

                entity.Property(e => e.Qty).HasColumnName("QTY");

                entity.Property(e => e.Toyid).HasColumnName("TOYID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Orderitems)
                    .HasForeignKey(d => d.Orderid)
                    .HasConstraintName("FK__ORDERITEM__ORDER__48CFD27E");

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.Orderitems)
                    .HasForeignKey(d => d.Toyid)
                    .HasConstraintName("FK__ORDERITEM__TOYID__49C3F6B7");
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.ToTable("TOYS");

                entity.Property(e => e.Toyid).HasColumnName("TOYID");

                entity.Property(e => e.Plantid).HasColumnName("PLANTID");

                entity.Property(e => e.Toyname)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("TOYNAME");

                entity.Property(e => e.Toyprice)
                    .HasColumnType("money")
                    .HasColumnName("TOYPRICE");

                entity.HasOne(d => d.Plant)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.Plantid)
                    .HasConstraintName("FK__TOYS__TOYPRICE__3C69FB99");
            });

            modelBuilder.Entity<Toytype>(entity =>
            {
                entity.HasKey(e => e.Typeid)
                    .HasName("PK__TOYTYPE__B2802A01065FAB56");

                entity.ToTable("TOYTYPE");

                entity.Property(e => e.Typeid).HasColumnName("TYPEID");

                entity.Property(e => e.Typename)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TYPENAME");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
