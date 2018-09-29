using System;

namespace Backend.Models
{
    public class Requirement
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public User User { get; set; }
        public DateTime Date { get; set; }

    }
}