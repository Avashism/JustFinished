using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JustFinishedAPI.Database
{
    public class Project
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description{ get; set; }
        [ForeignKey("User")]
        public int CreaterId { get; set; }
        public Boolean Completed { get; set; }
      
    }
}
