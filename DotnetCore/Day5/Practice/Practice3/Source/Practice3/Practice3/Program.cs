using System;
using System.Collections.Generic;
namespace Practice3
{
    class Program
    {
        static void Main(string[] args)
        {
            IDictionary<string, int> product = new Dictionary<string, int>();
            product.Add("wiper", 200);
            product.Add("clips", 50);
            product.Add("cup", 60);
            product.Add("powder", 65);
            product.Add("shoes", 500);
            product.Add("chocklates", 100);
      

            foreach(KeyValuePair<string,int> kvp in product)
            {
                Console.WriteLine($"Key : {kvp.Key}, value : {kvp.Value}");
            }

            Console.WriteLine("Enter Product Name :");
            string name = Console.ReadLine();

            if (product.ContainsKey(name))
            {
                Console.WriteLine($"Price of {name} is  {product[name]}");
            }
            else
            {
                Console.WriteLine("Item not Found");
            }
           var cities = new Dictionary<string, string>(){
    {"UK", "London, Manchester, Birmingham"},
    {"USA", "Chicago, New York, Washington"},
    {"India", "Mumbai, New Delhi, Pune"}
};

            foreach (var kvp in cities)
                Console.WriteLine("Key: {0}, Value: {1}", kvp.Key, kvp.Value);

            cities["UK"] = "HEllo ,How r u";
        }
    }
}
