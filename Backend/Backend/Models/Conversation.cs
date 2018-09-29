namespace Backend.Models
{
    public class Conversation
    {
        // Id, UseOne, UserTwo
        public int Id { get; set; }
        // for entity framework type must be User, but for the API returned json is ok?
        public User UserOne { get; set; }

        public User UserTwo { get; set; }
    }
}