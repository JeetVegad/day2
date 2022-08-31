using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Swiggy.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Swiggy.Services
{
	public interface IJWTManagerRepository
	{
		Tokens Authenticate(UserLoginDTO users,string role);
	}

	public class JWTManagerRepository : IJWTManagerRepository
	{
		private readonly IConfiguration iconfiguration;
		public JWTManagerRepository(IConfiguration iconfiguration)
		{
			this.iconfiguration = iconfiguration;
		}
		private swiggy2447jeetContext Dbcontext;
		public Tokens Authenticate(UserLoginDTO users,string role)
		{
			Dbcontext = new swiggy2447jeetContext();
			var user = Dbcontext.Users.SingleOrDefault(x => x.Useremail == users.email && x.Passwords == users.password);
			if (user == null)
			{
				return null;
            }
            else
            {
                if (string.IsNullOrEmpty(role))
                {
					var tempuser = Dbcontext.Users.SingleOrDefault(x => x.Useremail == users.email && x.Passwords == users.password);

					role = tempuser.Role;
				}
				var tokenHandler = new JwtSecurityTokenHandler();
				var tokenKey = Encoding.UTF8.GetBytes(iconfiguration["JWT:Key"]);
				var tokenDescriptor = new SecurityTokenDescriptor
				{
					Subject = new ClaimsIdentity(new Claim[]
				  {
			 new Claim(ClaimTypes.Email, users.email ),
			 new Claim(ClaimTypes.Role, role)
				  }),
					Expires = DateTime.UtcNow.AddMinutes(10),
					SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
				};
				var token = tokenHandler.CreateToken(tokenDescriptor);
				return new Tokens { Token = tokenHandler.WriteToken(token) };
			}

			// Else we generate JSON Web Token
			

		}
	}
}
