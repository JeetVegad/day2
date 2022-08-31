using SwiggyDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiggyDemo
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> Get();
        TEntity GetById(int id);
        TEntity Post(TEntity entity);
        TEntity Delete(TEntity entity);
        TEntity Put(TEntity entity);

    }
    public class Repository<T> : IRepository<T> where T : class
    {
        public Repository(SwiggyContext swiggy2447)
        {
            context = swiggy2447;
        }

        public SwiggyContext context { get; set; }

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

        public T Post(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
            return entity;
        }

        public T Put(T entity)
        {
            context.Update(entity);
            context.SaveChanges();
            return entity;
        }
    }
}