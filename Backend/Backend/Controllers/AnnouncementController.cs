using Backend.DAL;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend.Controllers
{
    /// <summary>
    /// Announcement
    /// </summary>
    public class AnnouncementController : ApiController
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        // GET: api/Announcement
        public IEnumerable<Announcement> Get()
        {
            return DataAccessHelper<Announcement>.GetAllEntities();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="value"></param>
        // POST: api/Announcement
        public Announcement Post([FromBody]Announcement value)
        {
            return DataAccessHelper<Announcement>.AddEntity(value);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        // PUT: api/Announcement/5
        public void Put(int id, [FromBody]Announcement value)
        {
            DataAccessHelper<Announcement>.UpdateEntity(id, value);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        // DELETE: api/Announcement/5
        public void Delete(int id)
        {
            DataAccessHelper<Announcement>.RemoveEntity(id);
        }
    }
}
