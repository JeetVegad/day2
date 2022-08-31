using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment.Migrations
{
    public partial class DbFirs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    CustometID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNo = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.CustometID);
                });

            migrationBuilder.CreateTable(
                name: "Plant",
                columns: table => new
                {
                    PlantID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlantName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    PlantAddress = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Pincode = table.Column<string>(type: "nvarchar(6)", maxLength: 6, nullable: false),
                    State = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Country = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plant", x => x.PlantID);
                });

            migrationBuilder.CreateTable(
                name: "CustomerAddress",
                columns: table => new
                {
                    AddressID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pincode = table.Column<string>(type: "nvarchar(6)", maxLength: 6, nullable: false),
                    state = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Country = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CustomerID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerAddress", x => x.AddressID);
                    table.ForeignKey(
                        name: "FK_CustomerAddress_Customer_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Customer",
                        principalColumn: "CustometID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Toy",
                columns: table => new
                {
                    ToyID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ToyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ToyQuantity = table.Column<int>(type: "int", nullable: false),
                    IsAvailable = table.Column<bool>(type: "bit", nullable: false),
                    PlantId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Toy", x => x.ToyID);
                    table.ForeignKey(
                        name: "FK_Toy_Plant_PlantId",
                        column: x => x.PlantId,
                        principalTable: "Plant",
                        principalColumn: "PlantID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    OrderID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TotalAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    AddressID = table.Column<int>(type: "int", nullable: false),
                    customerId = table.Column<int>(type: "int", nullable: false),
                    toyId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.OrderID);
                    table.ForeignKey(
                        name: "FK_Order_Customer_customerId",
                        column: x => x.customerId,
                        principalTable: "Customer",
                        principalColumn: "CustometID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Order_CustomerAddress_AddressID",
                        column: x => x.AddressID,
                        principalTable: "CustomerAddress",
                        principalColumn: "AddressID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Order_Toy_toyId",
                        column: x => x.toyId,
                        principalTable: "Toy",
                        principalColumn: "ToyID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PurchaseDetail",
                columns: table => new
                {
                    PurchaseID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderID = table.Column<int>(type: "int", nullable: false),
                    ToyID = table.Column<int>(type: "int", nullable: false),
                    Quantity = table.Column<byte>(type: "tinyint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PurchaseDetail", x => x.PurchaseID);
                    table.ForeignKey(
                        name: "FK_PurchaseDetail_Order_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Order",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PurchaseDetail_Toy_ToyID",
                        column: x => x.ToyID,
                        principalTable: "Toy",
                        principalColumn: "ToyID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_CustomerID",
                table: "CustomerAddress",
                column: "CustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_Order_AddressID",
                table: "Order",
                column: "AddressID");

            migrationBuilder.CreateIndex(
                name: "IX_Order_customerId",
                table: "Order",
                column: "customerId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_toyId",
                table: "Order",
                column: "toyId");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseDetail_OrderID",
                table: "PurchaseDetail",
                column: "OrderID");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseDetail_ToyID",
                table: "PurchaseDetail",
                column: "ToyID");

            migrationBuilder.CreateIndex(
                name: "IX_Toy_PlantId",
                table: "Toy",
                column: "PlantId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PurchaseDetail");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "CustomerAddress");

            migrationBuilder.DropTable(
                name: "Toy");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Plant");
        }
    }
}
