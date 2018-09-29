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
    /// Tax
    /// </summary>
    public class TaxController : ApiController
    {
        // GET: api/Tax
        /// <summary>
        /// Get all the taxes.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Tax> Get()
        {
            return DataAccessHelper<Tax>.GetAllEntities();
        }

        // POST: api/Tax
        /// <summary>
        /// Add tax.
        /// </summary>
        /// <param name="value"></param>
        public Tax Post([FromBody]Tax value)
        {
            return DataAccessHelper<Tax>.AddEntity(value);
        }

        // PUT: api/Tax/5
        /// <summary>
        /// Update tax.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        public void Put(int id, [FromBody]Tax value)
        {
            DataAccessHelper<Tax>.UpdateEntity(id, value);
        }

        // DELETE: api/Tax/5
        /// <summary>
        /// Delete tax.
        /// </summary>
        /// <param name="id"></param>
        public void Delete(int id)
        {
            DataAccessHelper<Tax>.RemoveEntity(id);
        }
    }
}
