using Backend.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;
using Backend.DAL;
using System.Net;

namespace Backend.Controllers
{
    /// <summary>
    /// Login controller
    /// </summary>
    public class LoginController : ApiController
    {

        // POST: api/Login
        /// <summary>
        /// Login
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns>null if the password was wrong</returns>
        public User Post([FromBody]User givenUser)
        {
            var data = DataAccessHelper<User>.GetAllEntities();
            var returnedUser = data.FirstOrDefault(user => user.UserName.Equals(givenUser.UserName));
            if(returnedUser != null && returnedUser.Password.Equals(givenUser.Password))
            {
                return returnedUser;
            }
            return null;
        }



        // PUT: api/Login/5
        /// <summary>
        /// Create account based on the given user.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Login/Register")]
        public User PostCreation([FromBody]User user)
        {
            return DataAccessHelper<User>.AddEntity(user);
        }

    }
}
