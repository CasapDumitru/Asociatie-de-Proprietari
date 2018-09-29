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
    /// Vote
    /// </summary>
    public class VoteController : ApiController
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        // GET: api/Vote
        public IEnumerable<Vote> Get()
        {
            return DataAccessHelper<Vote>.GetAllEntities();
        }

        // GET: api/Vote/5
        public string Get(int id)
        {
            throw new NotImplementedException();
        }

        // POST: api/Vote
        public Vote Post([FromBody]Vote value)
        {
            return DataAccessHelper<Vote>.AddEntity(value);
        }

        // PUT: api/Vote/5
        public void Put(int id, [FromBody]Vote value)
        {
            DataAccessHelper<Vote>.UpdateEntity(id, value);
        }

        // DELETE: api/Vote/5
        public void Delete(int id)
        {
            DataAccessHelper<Vote>.RemoveEntity(id);
        }
    }
}
