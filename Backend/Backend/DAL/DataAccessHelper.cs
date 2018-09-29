using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using System.Web;
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
namespace Backend.DAL
{
    /// <summary>
    /// Generic solution for some basic db operations.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class DataAccessHelper<T> where T : class
    {

        public static T AddEntity(T entity)
        {
            T newEntity;
            using (var context = new LocalDbContext())
            {
                var entitySet = context.Set<T>();
                newEntity = entitySet.Add(entity);
                context.SaveChanges();
            }
            return newEntity;
        }

        public static T RemoveEntity(T entity)
        {
            using (var context = new LocalDbContext())
            {
                context.Entry(entity).State = EntityState.Deleted;
                context.SaveChanges();
            }
            return entity;
        }

        public static T RemoveEntity(int id)
        {
            T entity;
            using (var context = new LocalDbContext())
            {
                var entitySet = context.Set<T>();
                entity = entitySet.Find(id);
                context.Entry(entity).State = EntityState.Deleted;
                context.SaveChanges();
            }
            return entity;
        }

        public static IEnumerable<T> GetAllEntities()
        {
            IList<T> entities = new List<T>();
            using (var context = new LocalDbContext())
            {
                var entitySet = context.Set<T>();
                var query = from entity in entitySet
                            select entity;

                foreach (var element in query)
                    entities.Add(element);
                // entities = query.AsEnumerable();

                var q = from t in Assembly.GetExecutingAssembly().GetTypes()
                        where t.IsClass && t.Namespace == "Backend.Models"
                        select t;

                var props = typeof(T).GetProperties().Where(p => q.Contains(p.PropertyType)).Select(p => p.Name);

                if(props.Count() == 0)
                {
                    return entitySet.ToList();
                }

                string includeString = string.Empty;

                foreach(string name in props)
                {
                    includeString += name + ".";
                }

                includeString = includeString.Trim('.');
                // works for every entity that has a User property
                // Solution: use reflaction to find complex properties
                // and call Include(foundProp1+"."+foundProp2+...)
                entities = entitySet
                        .Include(includeString)  
                        .ToList();
            }
            return entities;
        }

        public static void UpdateEntity(int id, T updatedEntity)
        {
            using (var context = new LocalDbContext())
            {
                var entitySet = context.Set<T>();
                var oldEntity = entitySet.Find(id);
                context.Entry(oldEntity).CurrentValues.SetValues(updatedEntity);
                context.SaveChanges();
            }

        }
    }
}