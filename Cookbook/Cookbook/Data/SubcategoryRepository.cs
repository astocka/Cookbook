using System.Collections.Generic;
using System.Threading.Tasks;
using Cookbook.Models;
using Microsoft.EntityFrameworkCore;

namespace Cookbook.Data
{
    public class SubcategoryRepository : ISubcategoryRepository
    {
        private readonly DataContext _dataContext;
        public SubcategoryRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void Add<T>(T entity) where T : class
        {
            _dataContext.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _dataContext.Remove(entity);
        }

        public async Task<IEnumerable<Subcategory>> GetSubcategories()
        {
            return await _dataContext.Subcategories.Include(c => c.Category).ToListAsync();
        }

        public async Task<Subcategory> GetSubcategory(int id)
        {
            return await _dataContext.Subcategories.Include(c => c.Category).FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task<bool> SaveAll()
        {
            return await _dataContext.SaveChangesAsync() > 0;
        }

        public void Update<T>(T entity) where T : class
        {
            _dataContext.Update(entity);
        }
    }
}