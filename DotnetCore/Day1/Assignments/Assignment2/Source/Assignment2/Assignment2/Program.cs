﻿using System;

namespace Assignment2
{
    class Program
    {
        static void Main(string[] args)
        {
            string myStr;
            int i, len, vowel_count, cons_count;
            Console.WriteLine("Enter your name :");
            myStr = Console.ReadLine();
            vowel_count = 0;
            cons_count = 0;
            // find length
            len = myStr.Length;
            for (i = 0; i < len; i++)
            {
                if (myStr[i] == 'a' || myStr[i] == 'e' || myStr[i] == 'i' || myStr[i] == 'o' || myStr[i] == 'u' || myStr[i] == 'A' || myStr[i] == 'E' || myStr[i] == 'I' || myStr[i] == 'O' || myStr[i] == 'U')
                {
                    vowel_count++;
                }
                else
                {
                    cons_count++;
                }
            }
            Console.Write($"\nVowels in the string: {vowel_count}\n");


        }
    }
}
