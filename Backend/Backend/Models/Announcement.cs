using System;

namespace Backend.Models
{
    public class Announcement
    {
        // Id - int, User - User, Title - string, Content - string, Date - Date
        public int Id { get; set; }

        public User User { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime Date { get; set; }
    }
}