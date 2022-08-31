using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment1
{
    class Person
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }

        public Person(string firstName, string lastName, string emailAddress, DateTime dateOfBirth)
        {
            FirstName = firstName;
            LastName = lastName;
            EmailAddress = emailAddress;
            DateOfBirth = dateOfBirth;
        }



        public string SunSign
        {
            get
            {


                if ((DateOfBirth.Day >= 21 && DateOfBirth.Month == 3) || (DateOfBirth.Day <= 19 && DateOfBirth.Month == 4))
                {
                    return "Aries";
                }
                if ((DateOfBirth.Day >= 20 && DateOfBirth.Month == 4) || (DateOfBirth.Day <= 20 && DateOfBirth.Month == 5))
                {
                    return "Taurus";
                }
                if ((DateOfBirth.Day >= 21 && DateOfBirth.Month == 5) || (DateOfBirth.Day <= 20 && DateOfBirth.Month == 6))
                {
                    return "Gemini";
                }
                if ((DateOfBirth.Day >= 21 && DateOfBirth.Month == 6) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 7))
                {
                    return "Cancer";
                }
                if ((DateOfBirth.Day >= 23 && DateOfBirth.Month == 7) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 8))
                {
                    return "Leo";
                }
                if ((DateOfBirth.Day >= 23 && DateOfBirth.Month == 8) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 9))
                {
                    return "Virgo";
                }
                if ((DateOfBirth.Day >= 23 && DateOfBirth.Month == 9) || (DateOfBirth.Day <= 22 && DateOfBirth.Month == 10))
                {
                    return "Libra";
                }
                if ((DateOfBirth.Day > 24 && DateOfBirth.Month == 10) || (DateOfBirth.Day < 22 && DateOfBirth.Month == 11))
                {
                    return "Scorpio";
                }
                if ((DateOfBirth.Day > 23 && DateOfBirth.Month == 11) || (DateOfBirth.Day < 22 && DateOfBirth.Month == 12))
                {
                    return "Sagittarius";
                }
                if ((DateOfBirth.Day > 23 && DateOfBirth.Month == 12) || (DateOfBirth.Day < 20 && DateOfBirth.Month == 1))
                {
                    return "Capricorn";
                }
                if ((DateOfBirth.Day > 21 && DateOfBirth.Month == 1) || (DateOfBirth.Day < 19 && DateOfBirth.Month == 2))
                {
                    return "Aquarius";
                }
                if ((DateOfBirth.Day > 20 && DateOfBirth.Month == 2) || (DateOfBirth.Day < 20 && DateOfBirth.Month == 3))
                {
                    return "Pisces";
                }
                return "";
            }
        }

        public string Adult
        {
            get
            {
                if ((DateTime.Now.Year - DateOfBirth.Year) >= 18)
                {
                    return "Adult";
                }
                else
                {
                    return "You are not Adult";
                }
            }
        }
        public string ChineseSign
        {
            get
            {
                double Num = DateOfBirth.Year % 12;
                if (Num == 0)
                {
                    return "Monkey";
                }
                if (Num == 1)
                {
                    return "Rooster";
                }
                if (Num == 2)
                {
                    return "Dog";
                }
                if (Num == 3)
                {
                    return "Pig";
                }
                if (Num == 4)
                {
                    return "Rat";
                }
                if (Num == 5)
                {
                    return "Ox";
                }
                if (Num == 6)
                {
                    return "Tiger";
                }
                if (Num == 7)
                {
                    return "Rabbit";
                }
                if (Num == 8)
                {
                    return "Dragon";
                }
                if (Num == 9)
                {
                    return "Snake";
                }
                if (Num == 10)
                {
                    return "Horse";
                }
                if (Num == 11)
                {
                    return "Sheep";
                }
                return "";
            }

        }

        public string ScreenName
        {
            get
            {

                string temp = DateOfBirth.ToString("MM/dd/yy");
                string[] splited = temp.Split("-");
                string result = string.Join("", splited);
                return $"{FirstName}{LastName}{result}";
            }
        }
    }
}