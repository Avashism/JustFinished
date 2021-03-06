﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustFinishedAPI.Database
{
    public class JustFinishedContext: DbContext
    {
        public JustFinishedContext()
        {
        }

        public JustFinishedContext(DbContextOptions<JustFinishedContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<User_Project> Users_Projects { get; set; }
        public DbSet<User_Invite> Users_Invites { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //check here if DB doesn't work
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=JustFinished;Trusted_Connection=True;");
        }
    }
}
