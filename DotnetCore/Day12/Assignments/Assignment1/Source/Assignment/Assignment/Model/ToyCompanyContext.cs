using Assignment1.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    class ToyCompanyContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {
            dbContextOptionsBuilder.UseSqlServer(@"Data Source=PC0341\MSSQL2019;Initial Catalog=ToyCompanyz;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<CustomerAddress>(entity =>
            {
                entity.ToTable("CustomerAddress");

                entity.HasIndex(e => e.CustomerId, "IX_Address_CustomerID");

                entity.Property(e => e.CustomerAddressId).HasColumnName("AddressID");

                entity.Property(e => e.Address).HasColumnName("Address");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.CustomerId);
            });
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustomerId);

                entity.ToTable("Customer");

                entity.Property(e => e.CustomerId).HasColumnName("CustometID");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("Order");

                //entity.HasIndex(e => e.AddressId, "IX_Order_AddressID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.TotalAmount).HasColumnType("decimal(18, 2)");

                entity.HasOne(d => d.CustomerAddress)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.AddressId);
            });
            modelBuilder.Entity<ToyPlant>(entity =>
            {
                entity.ToTable("Plant");

                entity.Property(e => e.PlantId).HasColumnName("PlantID");
            });

            modelBuilder.Entity<Item>(entity =>
            {
                entity.HasKey(e => e.ItemId);

                entity.ToTable("PurchaseDetail");

                entity.HasIndex(e => e.OrderId, "IX_PurchaseDetail_OrderID");

                entity.HasIndex(e => e.ToyId, "IX_PurchaseDetail_ToyID");

                entity.Property(e => e.ItemId).HasColumnName("PurchaseID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.ToyId).HasColumnName("ToyID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.OrderId);

            });
            modelBuilder.Entity<Toy>(entity =>
            {
                entity.ToTable("Toy");


                entity.Property(e => e.ToyId).HasColumnName("ToyID");
                entity.Property(e => e.ToyName).HasColumnName("ToyName");
                entity.Property(e => e.Price).HasColumnName("Price");
                entity.Property(e => e.ToyQuantity).HasColumnName("ToyQuantity");

                entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");


                entity.HasOne(d => d.Plant)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.PlantId);
            });


        }


        public DbSet<Customer> Customers { get; set; }

        public DbSet<CustomerAddress> CustomerAddresses { get; set; }

        public DbSet<ToyPlant> Plants { get; set; }

        public DbSet<Toy> Toys { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Item> OrderItems { get; set; }
    }
}
