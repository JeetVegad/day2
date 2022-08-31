using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment1.Models;
namespace Assignment1
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Add(TEntity entity);

        List<TEntity> Get();

        TEntity GetById(int id);

        TEntity DeleteCustomer(TEntity entity);
    }
    public class Repository<T> : IRepository<T> where T : class
    {
        public ToyCompanyContext context { get; set; }
        public Repository(ToyCompanyContext toyCompany)
        {
            context = toyCompany;
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
        public T DeleteCustomer(T entity)
        {
            context.Remove(entity);
            context.SaveChanges();
            return entity;
        }
    }
    
}
