using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;
using System.Configuration;

namespace Practice1
{
    public class Employee
    {
        SqlConnection con = null;
        public Employee()
        {
            string name = ConfigurationManager.ConnectionStrings["Jeet"].ConnectionString;
            con = new SqlConnection(name);
        }
        public List<HREmp> getreport()
        {

            List<HREmp> employees = new List<HREmp>();            
            SqlCommand sqlCommand = new SqlCommand("select BusinessEntityId,jobTitle,LoginId from HumanResources.Employee",con);
            con.Open();
            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            while (sqlDataReader.Read())
            {
                employees.Add(new HREmp() { BusBusinessEntityId = Convert.ToInt32(sqlDataReader[0]), jobTitle = sqlDataReader[1].ToString(), LoginId = sqlDataReader[2].ToString() }); ;
            }
            sqlDataReader.Close();
            con.Close();
            return employees;
        }
    }
}
