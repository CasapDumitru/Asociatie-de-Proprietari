namespace Backend.Models
{
    public class SmartHome
    {
        public int Id { get; set; }
        public bool IsActivated { get; set; }
        public string Ip { get; set; }
        public User User { get; set; }
    }
}