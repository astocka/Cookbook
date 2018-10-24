using System.Collections.Generic;
using System.Threading.Tasks;
using Cookbook.Models;

namespace Cookbook.Data
{
    public interface ICategoryRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Category>> GetCategories();
        Task<Category> GetCategory(int id);
    }
}