using Backend.DAL;
using Backend.Models;
using System.Web.Http;
using System.Linq;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Backend.Controllers
{
    public class SmartHomeController : ApiController
    {
        private SmartHomeDAO repo = new SmartHomeDAO();

        //GET api/smartHome/{id}
        public SmartHome GetSmartHome(int id)
        {
            return DataAccessHelper<SmartHome>
                .GetAllEntities()
                .FirstOrDefault( smart => smart.User.Id == id);
            //return repo.GetSmartHomeById(id);
        }

        //POST api/smartHome
        public SmartHome CreateSmartHome([FromBody]SmartHome smartHome)
        {
            return DataAccessHelper<SmartHome>.AddEntity(smartHome);
        }

        //PUT api/smartHome
        public void Put(int id, [FromBody]SmartHome smartHome)
        {
            DataAccessHelper<SmartHome>.UpdateEntity(id, smartHome);
        }

        //DELETE api/smartHome
        public SmartHome DeleteSmartHome(int id)
        {
            return DataAccessHelper<SmartHome>.RemoveEntity(id);
        }
    }
}
