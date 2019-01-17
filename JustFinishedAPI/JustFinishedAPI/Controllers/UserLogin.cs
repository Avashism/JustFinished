using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CryptoHelper;
using JustFinishedAPI.Database;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JustFinishedAPI.Controllers
{
    [Route("login")]
    public class UserLoginController : Controller
    {
        private readonly JustFinishedContext _context;
        public UserLoginController(JustFinishedContext context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult Login([FromBody] Login login)
        {
            var userinDb = _context.Users.SingleOrDefault(u =>
            u.Email == login.Email && (Crypto.VerifyHashedPassword(u.Password, login.Password)));
            if (userinDb != null)
            {
                return Ok(userinDb);

            }
            return Ok(false);
        }
       
    }
}
