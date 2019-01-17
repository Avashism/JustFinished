using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CryptoHelper;
using JustFinishedAPI.Database;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JustFinishedAPI.Controllers
{
    [Route("user")]
    public class UserRegController : Controller
    {
        private readonly JustFinishedContext _context;
        public UserRegController(JustFinishedContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult UserRegistration([FromBody] User user)
        {
            var userinDb = _context.Users.SingleOrDefault(u =>
              u.Email == user.Email);
            var userinDb2 = _context.Users.SingleOrDefault(u =>
              u.Username == user.Username);
            if (userinDb != null)
            {
                return Ok(_sendIncorrectEmailMessage());
            }
            if (userinDb2 != null)
            {
                return Ok(_sendIncorrectUsernameMessage());
            }


            user.Password = Crypto.HashPassword(user.Password);

            using (var context = new JustFinishedContext())
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
            return Ok(user);
        }
        private String _sendIncorrectEmailMessage()
        {
            return JsonConvert.SerializeObject(new
            {
                status = "Error",
                message = "This email has already been used for Registration",
            });
        }
        private String _sendIncorrectUsernameMessage()
        {
            return JsonConvert.SerializeObject(new
            {
                status = "Error",
                message = "This Username has already been used for Registration",
            });
        }

    }
}
