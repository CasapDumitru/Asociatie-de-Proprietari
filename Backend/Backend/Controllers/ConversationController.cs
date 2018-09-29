using Backend.DAL;
using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Backend.Controllers
{
    /// <summary>
    /// Conversation controller
    /// </summary>
    public class ConversationController : ApiController
    {
        /// <summary>
        /// Get conversations
        /// </summary>
        /// <returns></returns>
        // GET: api/Conversation
        public IEnumerable<Conversation> Get()
        {
            return DataAccessHelper<Conversation>.GetAllEntities();
        }

        /// <summary>
        /// Get all messages for the given conversation
        /// </summary>
        /// <returns></returns>
        // GET: api/Conversation/5
        [HttpGet]
        [Route("api/Message/{conversationId}")]
        public IEnumerable<Message> Get(int conversationId)
        {
            return DataAccessHelper<Message>.GetAllEntities()
                .Where(mess => mess.Id == conversationId);
        }

        /// <summary>
        /// Save message
        /// </summary>
        /// <param name="value"></param>
        // POST: api/Message
        [HttpPost]
        [Route("api/Message")]
        public void Post([FromBody]Message value)
        {

        }

        /// <summary>
        /// Create or get conversation
        /// </summary>
        /// <param name="userOneId"></param>
        /// <param name="userTwoId"></param>
        // PUT: api/Conversation/5
        [HttpPut]
        [Route("api/Message/{userOneId}/{userTwoId}")]
        public void Put(int userOneId, int userTwoId)
        {

        }

    }
}
