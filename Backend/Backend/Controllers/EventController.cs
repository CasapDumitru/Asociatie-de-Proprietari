using Backend.DAL;
using Backend.Models;
using System.Collections.Generic;
using System.Web.Http;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.Controllers
{
    public class EventController : ApiController
    {
        private EventDAO repo = new EventDAO();

        [Route("api/event/{month}/{year}")]
        public IEnumerable<Event> GetEventsByMonthAndYear(int month, int year)
        {
            return repo.GetEventsByMonthAndYear(month, year);
        }

        //POST api/event
        public Event CreateEvent([FromBody]Event theEvent)
        {
            return DataAccessHelper<Event>.AddEntity(theEvent);
        }

        //DELETE api/event
        public Event DeleteEvent(int id)
        {
            return DataAccessHelper<Event>.RemoveEntity(id);
        }
 
    }
}
