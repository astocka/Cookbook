using System.Collections.Generic;
using System.Threading.Tasks;
using Cookbook.Models;
using Microsoft.EntityFrameworkCore;

namespace Cookbook.Data
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _dataContext;
        public CategoryRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void Add<T>(T entity) where T : class
        {
            _dataContext.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _dataContext.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _dataContext.Remove(entity);
        }

        public async Task<Category> GetCategory(int id)
        {
            var category = await _dataContext.Categories.FirstOrDefaultAsync(r => r.Id == id);
            return category;
        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            return await _dataContext.Categories.ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _dataContext.SaveChangesAsync() > 0;
        }
    }
}