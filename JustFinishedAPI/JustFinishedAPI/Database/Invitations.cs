using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustFinishedAPI.Database
{
    public class Invitations
    {
        public int Id { get; set; }
        public int Project_Id { get; set; }
        public string[] Participants { get; set; }
    }
}
