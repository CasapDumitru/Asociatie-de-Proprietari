using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.DAL
{
    public class NotifiedUserDAO
    {
        public IEnumerable<NotifiedUser> GetAllNotifiedTenants()
        {
            IEnumerable<NotifiedUser> notifiedTenants = null;
            using (var dbContext = new LocalDbContext())
            {
                notifiedTenants = dbContext
                    .NotifiedUsers
                    .Include(user => user.User).Include(user => user.SmartHome)
                    .Where(user => user.User.UserType == UserTypes.Tenant).ToList().AsQueryable();
            }
            return notifiedTenants;
        }
        
    }
}