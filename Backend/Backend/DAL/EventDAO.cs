using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.DAL
{
    public class EventDAO
    {
        public IEnumerable<Event> GetEventsByMonthAndYear(int month, int year)
        {
            IEnumerable<Event> events = null;
            using (var dbContext = new LocalDbContext())
            {
                events = dbContext
                    .Events
                    .Include(e => e.User) // eagerly loading
                    .Where(e => e.Date.Year == year && e.Date.Month == month)
                    .ToList().AsEnumerable();
            }
            return events;
        }
    }
}