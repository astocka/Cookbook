using System.Collections.Generic;
using System.Threading.Tasks;
using Cookbook.Models;

namespace Cookbook.Data
{
    public interface ISubcategoryRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Subcategory>> GetSubcategories();
        Task<Subcategory> GetSubcategory(int id);
    }
}