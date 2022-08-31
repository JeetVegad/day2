using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Add(TEntity entity);

        List<TEntity> Get();
        TEntity GetById(int id);

        TEntity Delete(TEntity entity);

        TEntity Put(TEntity old, TEntity navu);
    }
    public class Repository<T> : IRepository<T> where T:class
    {
        public Repository(JeetVegadContext jeetVegad)
        {
            context= jeetVegad  ;
        }

        public JeetVegadContext context { get; set; }
        
        public T Add(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
            return entity;
        }

        public T Delete(T entity)
        {
            context.Remove(entity);
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

        public T Put(T old, T navu)
        {

            context.Entry(old).CurrentValues.SetValues(navu);
            context.SaveChanges();
            return navu;
        }
    }
}
