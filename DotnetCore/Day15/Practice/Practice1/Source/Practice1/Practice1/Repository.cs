using Practice1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice1
{
    public interface IRepository<TEntity> where TEntity :class
    {
        List<TEntity> Get();
    }
    public class Repository<T> : IRepository<T> where T : class
    {
        public AdventureWorks2016Context context { get; set; }
        public Repository(AdventureWorks2016Context product)
        {
            context = product;
        }
        public List<T> Get()
        {
            return context.Set<T>().ToList();
        }
    }
}
