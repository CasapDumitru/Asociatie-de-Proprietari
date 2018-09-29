using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.DAL
{
    public class UserDAO
    {
        public User GetUserById(int id)
        {
            User theUser = null;
            using (var dbContext = new LocalDbContext())
            {
                theUser = dbContext
                    .Users
                    .FirstOrDefault(user => user.Id == id);
            }
            return theUser;
        }

        public IEnumerable<User> GetAllTenants()
        {
            IEnumerable<User> tenants = null;
            using (var dbContext = new LocalDbContext())
            {
                tenants = dbContext
                    .Users
                    .Where(user => user.UserType == UserTypes.Tenant).ToList().AsEnumerable();
            }
            return tenants;
        }
    }
}