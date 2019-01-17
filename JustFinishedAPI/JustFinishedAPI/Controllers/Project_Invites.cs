using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JustFinishedAPI.Database;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JustFinishedAPI.Controllers
{
    [Route("invite")]
    public class Project_Invites : Controller
    {
        private readonly JustFinishedContext _context;
        public Project_Invites(JustFinishedContext context) {
            _context = context;
        }


        [HttpPost("verification")]
        public IActionResult Check([FromBody] Participants participants)
        {
            foreach (var P in participants.Participant) {
                var userinDb = _context.Users.SingleOrDefault(u => u.Email == P);
                if (userinDb == null) {
                    return Ok(false);
                        }
            }
            return Ok(true);

        }
        [HttpPost("project")]
        public IActionResult Register([FromBody] Project project) {
            _context.Projects.Add(project);
            _context.SaveChanges();
            return Ok(project.Id);
        }
        [HttpPost("invite")]
        public IActionResult Invite([FromBody] Invitations invitation) {
            User_Invite user_Invite = new User_Invite();
            foreach (var invitee in invitation.Participants ){
                user_Invite.ProjectId = invitation.Project_Id;
                user_Invite.Email = invitee;
                _context.Users_Invites.Add(user_Invite);
                _context.SaveChanges();
                    }
            return Ok(true);
        }
        



    }

}
