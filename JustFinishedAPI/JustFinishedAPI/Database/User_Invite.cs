using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JustFinishedAPI.Database
{
    public class User_Invite
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public string Email { get; set; }
        [ForeignKey("Project")]
        public int ProjectId { get; set; }

    }
}
