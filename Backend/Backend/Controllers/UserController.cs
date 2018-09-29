using Backend.DAL;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.Controllers
{
    public class UserController : ApiController
    {
        private UserDAO repo = new UserDAO();
        // GET api/user
        public IEnumerable<User> Get()
        {
            return DataAccessHelper<User>.GetAllEntities();
        }

        // GET api/user/id
        public User Get(int id)
        {
            return repo.GetUserById(id);
        }

        // GET api/tenants
        [Route("api/tenants/")]
        public IEnumerable<User> GetTenants()
        {
            return repo.GetAllTenants();
        }

        // POST api/user
        public User Post([FromBody]User user)
        {
            return DataAccessHelper<User>.AddEntity(user);
        }

    }
}