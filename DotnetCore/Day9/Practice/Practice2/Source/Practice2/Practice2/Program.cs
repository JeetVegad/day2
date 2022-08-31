using System;

namespace Practice2
{
    public static class stringGHElp
    {
        public static string GetUpperCase(this string name)
        {
            return name.ToUpper();
        }
        public static int consonants(this string name)
        {
            int i, len, vowel, consonants;
            vowel = 0;
            var low = name.ToLower();
            consonants = 0;
            len = low.Length;
            for ( i = 0; i < len; i++)
            {
                if (low[i] == 'a' || low[i] == 'e' || low[i] == 'i' || low[i] == 'o' || low[i] == 'u')
                {
                    vowel++;
                }
                else
                {
                    consonants++;
                }
            }
            return consonants ;
        }
    }
    public  class Program
    {
        
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Your Name :");
            string name =  Console.ReadLine();

            var o = name.consonants();
            Console.WriteLine($"{o}");
            string str = name.GetUpperCase();
            Console.WriteLine(str);
        }
       
    }
    
}
