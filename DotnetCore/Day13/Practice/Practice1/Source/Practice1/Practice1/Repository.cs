using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Practice1.Models;
namespace Practice1
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Add(TEntity entity);

        List<TEntity> Get();

        TEntity GetById(int id);

        TEntity DeletePerson(TEntity entity);
    }

    public class Repository<T> : IRepository<T> where T : class
    {
        public webapipracticeContext context { get; set; }
        public Repository(webapipracticeContext webapipractice)
        {
            context = webapipractice;
        }
        public T Add(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
            return entity;
        }

        public List<T> Get()
        {
            return context.Set<T>().ToList();
        }
        public T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }

        public T DeletePerson(T entity)
        {
           
         context.Remove(entity);
            context.SaveChanges();
            return entity;
        }
    } 
    
}
