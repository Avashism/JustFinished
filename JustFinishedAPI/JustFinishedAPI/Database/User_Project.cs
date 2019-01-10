﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JustFinishedAPI.Database
{
    public class User_Project
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; } 
         [ForeignKey("Project")]
        public int ProjectId { get; set; }
        public Boolean Completed { get; set; }

    }
}
  