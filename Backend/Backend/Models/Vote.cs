using System;

namespace Backend.Models
{
    public class Vote
    {
        // Id - int, User - User, Content - string, NumberOfVotes - int, Status - boolean, Date - Date
        public int Id { get; set; }

        public User User { get; set; }

        public string Content { get; set; }

        public int NumberOfVotes { get; set; }

        public bool Status { get; set; }

        public DateTime Date { get; set; }
    }
}