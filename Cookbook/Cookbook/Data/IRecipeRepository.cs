using System.Collections.Generic;
using System.Threading.Tasks;
using Cookbook.Models;

namespace Cookbook.Data
{
    public interface IRecipeRepository
    {
         void Add<T>(T entity) where T : class;
         void Update<T>(T entity) where T : class;
         void Delete<T>(T entity) where T : class;
         Task<bool> SaveAll();
         Task<IEnumerable<Recipe>> GetRecipes();
         Task<Recipe> GetRecipe(int id);
         Task<IEnumerable<Recipe>> SearchRecipe(string search);
    }
}