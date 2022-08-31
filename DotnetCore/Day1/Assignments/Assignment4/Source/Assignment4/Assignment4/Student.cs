using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment4
{
    class Student
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int Hindi { get; set; }
        public int English { get; set; }
        public int Maths { get; set; }
        public int total { get { return (Hindi + English + Maths); } }
        public float percentage { get { return total / 3.0f; } }

        public string grade
        {
            get
            {

                if (percentage < 65)
                {
                    return "C";
                }
                else if (percentage >= 65 && percentage < 85)
                {
                    return "B";
                }
                else if (percentage >= 85)
                {
                    return "A";
                }
                return "D";
            }
        }
    }
}
