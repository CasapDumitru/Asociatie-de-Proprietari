using System;

namespace Backend.Models
{
    public class NotifiedUser
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public User User { get; set; }
        public SmartHome SmartHome { get; set; }
    }
}