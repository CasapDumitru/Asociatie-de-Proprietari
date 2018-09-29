using Backend.DAL;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.Controllers
{
    public class NotifiedUserController : ApiController
    {
        private NotifiedUserDAO repo = new NotifiedUserDAO();

        //GET api/notifiedUser
        public IEnumerable<NotifiedUser> Get()
        {
            return repo.GetAllNotifiedTenants();
        }

        //POST api/notifiedUser
        public NotifiedUser Post([FromBody]NotifiedUser notifiedUser)
        {
            return DataAccessHelper<NotifiedUser>.AddEntity(notifiedUser);
        }

        //DELETE api/notifiedUser
        public NotifiedUser Delete(int id)
        {
            return DataAccessHelper<NotifiedUser>.RemoveEntity(id);
        }
    }
}
