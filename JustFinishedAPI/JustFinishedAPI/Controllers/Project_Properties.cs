using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JustFinishedAPI.Database;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JustFinishedAPI.Controllers
{
    [Route("Properties")]
    public class Project_Properties : Controller
    {
        private readonly JustFinishedContext _context;
        public Project_Properties(JustFinishedContext context)
        {
            _context = context;
        }
        [HttpPost("acceptInvitation")]
        public IActionResult aInvitations([FromBody] User_Project user_project) {
            _context.Users_Projects.Add(user_project);
            var userInDb = _context.Users_Invites.SingleOrDefault(u => u.Email == user_project.Email && u.ProjectId == user_project.ProjectId);
            _context.Users_Invites.Remove(userInDb);
            _context.SaveChanges();
            return Ok(true);
        }


        [HttpGet("invitations/{email}")]
        public IActionResult invitations(string email) 
        {
            ArrayList invites = new ArrayList();
           var inv = getProjectId(email);
            foreach (var i in inv) {
                var projectInDb = _context.Projects.SingleOrDefault(u => u.Id == i.ProjectId);
                invites.Add(projectInDb);
            }
            return Ok(invites);
        }
        public IEnumerable<User_Invite> getProjectId(string email) => _context.Users_Invites.Where(i => i.Email == email);


        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
