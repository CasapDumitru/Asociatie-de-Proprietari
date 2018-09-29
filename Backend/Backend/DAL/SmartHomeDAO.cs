using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.DAL
{
    public class SmartHomeDAO
    {
        public SmartHome GetSmartHomeById(int id)
        {
            SmartHome smartHome = null;
            using (var dbContext = new LocalDbContext())
            {
                smartHome = dbContext
                    .SmartHomes
                    .Include(smh => smh.User) // eagerly loading
                    .FirstOrDefault(smh => smh.Id == id);
            }
            return smartHome;
        }
    }
}