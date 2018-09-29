using System;

namespace Backend.Models
{
    public class Message
    {
        // Id, Text, User, Date, ConversationId
        public int Id { get; set; }

        public string Text { get; set; }

        public User User { get; set; }

        public DateTime Date { get; set; }

        public Conversation Conversation { get; set; }
    }
}