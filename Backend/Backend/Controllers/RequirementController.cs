using Backend.DAL;
using Backend.Models;
using System.Collections.Generic;
using System.Web.Http;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
namespace Backend.Controllers
{
   
    public class RequirementController : ApiController
    {
        // GET api/Requirement
        public IEnumerable<Requirement> GetAllRequirements()
        {
            return DataAccessHelper<Requirement>.GetAllEntities();
        }

        //POST api/Requirement
        public Requirement AddRequirement([FromBody]Requirement requirement)
        {
            return DataAccessHelper<Requirement>.AddEntity(requirement);
        }

        //PUT api/Requirement
        public void UpdateRequirement(int id, [FromBody]Requirement requirement)
        {
            DataAccessHelper<Requirement>.UpdateEntity(id, requirement);
        }

        //DELETE api/Requirement
        public void DeleteRequirement(int id)
        {
            DataAccessHelper<Requirement>.RemoveEntity(id);
        }
    }
}
