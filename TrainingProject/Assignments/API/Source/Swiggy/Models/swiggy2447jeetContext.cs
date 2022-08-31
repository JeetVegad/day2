using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Swiggy.Models
{
    public partial class swiggy2447jeetContext : DbContext
    {
        public swiggy2447jeetContext()
        {
        }

        public swiggy2447jeetContext(DbContextOptions<swiggy2447jeetContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Cartitem> Cartitems { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Customization> Customizations { get; set; }
        public virtual DbSet<Foodmaster> Foodmasters { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Orderitem> Orderitems { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Prepoption> Prepoptions { get; set; }
        public virtual DbSet<Restaurant> Restaurants { get; set; }
        public virtual DbSet<Restaurantfooditem> Restaurantfooditems { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=43.204.134.14;Database=swiggy-2447-jeet;User Id=swiggy-2447-jeet;Password=GgpVTu8jIB2wcHn;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.HasKey(e => e.Addid)
                    .HasName("PK__ADDRESSE__B2E07AA336527D89");

                entity.ToTable("ADDRESSES");

                entity.Property(e => e.Addid).HasColumnName("ADDID");

                entity.Property(e => e.Addresses)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESSES");

                entity.Property(e => e.Defaultadd).HasColumnName("DEFAULTADD");

                entity.Property(e => e.Userid).HasColumnName("USERID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ADDRESSES__USERI__46E78A0C");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("CART");

                entity.Property(e => e.Cartid).HasColumnName("CARTID");

                entity.Property(e => e.Restaurantid).HasColumnName("RESTAURANTID");

                entity.Property(e => e.Userid).HasColumnName("USERID");

                entity.HasOne(d => d.Restaurant)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.Restaurantid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CART__RESTAURANT__37A5467C");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.Userid)
                    .HasConstraintName("FK__CART__USERID__38996AB5");
            });

            modelBuilder.Entity<Cartitem>(entity =>
            {
                entity.ToTable("CARTITEM");

                entity.Property(e => e.Cartitemid).HasColumnName("CARTITEMID");

                entity.Property(e => e.Cartid).HasColumnName("CARTID");

                entity.Property(e => e.Foodid).HasColumnName("FOODID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.Property(e => e.Subtotal).HasColumnName("SUBTOTAL");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.Cartitems)
                    .HasForeignKey(d => d.Cartid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CARTITEM__CARTID__3B75D760");

                entity.HasOne(d => d.Food)
                    .WithMany(p => p.Cartitems)
                    .HasForeignKey(d => d.Foodid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CARTITEM__FOODID__3C69FB99");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("CITY");

                entity.Property(e => e.Cityid).HasColumnName("CITYID");

                entity.Property(e => e.Cityname)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("CITYNAME");
            });

            modelBuilder.Entity<Customization>(entity =>
            {
                entity.HasKey(e => e.Customizeid)
                    .HasName("PK__CUSTOMIZ__D120902FEE11E83E");

                entity.ToTable("CUSTOMIZATION");

                entity.Property(e => e.Customizeid).HasColumnName("CUSTOMIZEID");

                entity.Property(e => e.Fooditemid).HasColumnName("FOODITEMID");

                entity.Property(e => e.Prepid).HasColumnName("PREPID");

                entity.HasOne(d => d.Fooditem)
                    .WithMany(p => p.Customizations)
                    .HasForeignKey(d => d.Fooditemid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CUSTOMIZA__FOODI__31EC6D26");

                entity.HasOne(d => d.Prep)
                    .WithMany(p => p.Customizations)
                    .HasForeignKey(d => d.Prepid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CUSTOMIZA__PREPI__30F848ED");
            });

            modelBuilder.Entity<Foodmaster>(entity =>
            {
                entity.HasKey(e => e.Foodid)
                    .HasName("PK__FOODMAST__8B22F1F7576CE157");

                entity.ToTable("FOODMASTER");

                entity.Property(e => e.Foodid).HasColumnName("FOODID");

                entity.Property(e => e.Foodname)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("FOODNAME");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("ORDERS");

                entity.Property(e => e.Orderid).HasColumnName("ORDERID");

                entity.Property(e => e.Addid).HasColumnName("ADDID");

                entity.Property(e => e.Orderdate)
                    .HasColumnType("datetime")
                    .HasColumnName("ORDERDATE")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Total).HasColumnName("TOTAL");

                entity.Property(e => e.Userid).HasColumnName("USERID");

                entity.HasOne(d => d.Add)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.Addid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ORDERS_ADDRESSES");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.Userid)
                    .HasConstraintName("FK__ORDERS__USERID__403A8C7D");
            });

            modelBuilder.Entity<Orderitem>(entity =>
            {
                entity.ToTable("ORDERITEMS");

                entity.Property(e => e.Orderitemid).HasColumnName("ORDERITEMID");

                entity.Property(e => e.Fooditemid).HasColumnName("FOODITEMID");

                entity.Property(e => e.Orderid).HasColumnName("ORDERID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.Property(e => e.Restaurantid).HasColumnName("RESTAURANTID");

                entity.HasOne(d => d.Fooditem)
                    .WithMany(p => p.Orderitems)
                    .HasForeignKey(d => d.Fooditemid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ORDERITEM__FOODI__4316F928");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Orderitems)
                    .HasForeignKey(d => d.Orderid)
                    .HasConstraintName("FK__ORDERITEM__ORDER__440B1D61");

                entity.HasOne(d => d.Restaurant)
                    .WithMany(p => p.Orderitems)
                    .HasForeignKey(d => d.Restaurantid)
                    .HasConstraintName("FK_ORDERITEMS_RESTAURANTS");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("PAYMENT");

                entity.Property(e => e.Paymentid).HasColumnName("PAYMENTID");

                entity.Property(e => e.Orderdate)
                    .HasColumnType("datetime")
                    .HasColumnName("ORDERDATE")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Orderid).HasColumnName("ORDERID");

                entity.Property(e => e.Paymenttype)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("PAYMENTTYPE");

                entity.Property(e => e.Statuss)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("STATUSS");

                entity.Property(e => e.Totalnetpay).HasColumnName("TOTALNETPAY");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.Orderid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PAYMENT__ORDERID__4AB81AF0");
            });

            modelBuilder.Entity<Prepoption>(entity =>
            {
                entity.HasKey(e => e.Prepid)
                    .HasName("PK__PREPOPTI__0A41504C85F7784C");

                entity.ToTable("PREPOPTION");

                entity.Property(e => e.Prepid).HasColumnName("PREPID");

                entity.Property(e => e.Names)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("NAMES");

                entity.Property(e => e.Price)
                    .HasColumnName("PRICE")
                    .HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<Restaurant>(entity =>
            {
                entity.ToTable("RESTAURANTS");

                entity.Property(e => e.Restaurantid).HasColumnName("RESTAURANTID");

                entity.Property(e => e.Addresss)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESSS");

                entity.Property(e => e.Cityid).HasColumnName("CITYID");

                entity.Property(e => e.Coupen)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("COUPEN");

                entity.Property(e => e.Images)
                    .IsUnicode(false)
                    .HasColumnName("IMAGES");

                entity.Property(e => e.Price).HasColumnName("PRICE");

                entity.Property(e => e.Rating).HasColumnName("RATING");

                entity.Property(e => e.Restaurantname)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("RESTAURANTNAME");

                entity.Property(e => e.Restauranttype)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("RESTAURANTTYPE");

                entity.Property(e => e.Times).HasColumnName("TIMES");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Restaurants)
                    .HasForeignKey(d => d.Cityid)
                    .HasConstraintName("FK__RESTAURAN__CITYI__6A30C649");
            });

            modelBuilder.Entity<Restaurantfooditem>(entity =>
            {
                entity.HasKey(e => e.Fooditemid)
                    .HasName("PK__RESTAURA__E9C26BFF2FC9963A");

                entity.ToTable("RESTAURANTFOODITEM");

                entity.Property(e => e.Fooditemid).HasColumnName("FOODITEMID");

                entity.Property(e => e.Description)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");

                entity.Property(e => e.Foodid).HasColumnName("FOODID");

                entity.Property(e => e.Foodname)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("FOODNAME");

                entity.Property(e => e.Images)
                    .IsUnicode(false)
                    .HasColumnName("IMAGES");

                entity.Property(e => e.Price).HasColumnName("PRICE");

                entity.Property(e => e.Restaurantid).HasColumnName("RESTAURANTID");

                entity.HasOne(d => d.Food)
                    .WithMany(p => p.Restaurantfooditems)
                    .HasForeignKey(d => d.Foodid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__RESTAURAN__FOODI__2A4B4B5E");

                entity.HasOne(d => d.Restaurant)
                    .WithMany(p => p.Restaurantfooditems)
                    .HasForeignKey(d => d.Restaurantid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__RESTAURAN__RESTA__2B3F6F97");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("USERS");

                entity.Property(e => e.Userid).HasColumnName("USERID");

                entity.Property(e => e.Passwords)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORDS");

                entity.Property(e => e.Phone).HasColumnName("PHONE");

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("ROLE")
                    .HasDefaultValueSql("(user_name())");

                entity.Property(e => e.Useremail)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("USEREMAIL");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("USERNAME");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
