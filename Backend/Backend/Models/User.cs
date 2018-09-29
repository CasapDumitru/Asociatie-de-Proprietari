namespace Backend.Models
{
    public enum UserTypes
    {
        Unspecified, Admin,Tenant
    }

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public UserTypes UserType { get; set; }

    }
}