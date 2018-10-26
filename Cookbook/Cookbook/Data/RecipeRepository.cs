using System.Collections.Generic;
using System.Threading.Tasks;
using Cookbook.Models;
using Microsoft.EntityFrameworkCore;

namespace Cookbook.Data
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly DataContext _dataContext;
        public RecipeRepository(DataContext dataContext)
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

        public async Task<Recipe> GetRecipe(int id)
        {
            var recipe = await _dataContext.Recipes.Include(c => c.Category).ThenInclude(s => s.Subcategories).FirstOrDefaultAsync(r => r.Id == id);
            return recipe;
        }

        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            return await _dataContext.Recipes.Include(c => c.Category).ThenInclude(s => s.Subcategories).ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _dataContext.SaveChangesAsync() > 0;
        }

        // public async Task<List<Recipe>> GetCategoryRecipes(string category)
        // {
        //    var categoryRecipes = await _dataContext.Recipes.Include(c => c.Category).ToListAsync();
        //    List<Recipe> result = new List<Recipe>();
        //    foreach(var x in categoryRecipes)
        //    {
        //        if(x.Category.CategoryName == category)
        //        {
        //            result.Add(x);
        //        }
        //    }
        //    return result;
        // }
    }
}