using System.Threading.Tasks;
using Cookbook.Data;
using Cookbook.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cookbook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repo;
        public CategoryController(ICategoryRepository repo)
        {
            _repo = repo;
        }

        // GET: api/category
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _repo.GetCategories();
            return Ok(categories);
        }

        // GET: api/category/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var category = await _repo.GetCategory(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/category/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory([FromRoute] int id, [FromBody] Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != category.Id)
            {
                return BadRequest();
            }

            _repo.Update(category);
            try
            {
                await _repo.SaveAll();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new System.Exception($"Updating category {id} failed on save.");
            }

            return NoContent();
        }

        // POST: api/category
        [HttpPost]
        public async Task<IActionResult> PostCategory([FromBody] Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repo.Add(category);
            await _repo.SaveAll();

            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }

        // DELETE: api/category/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var category = await _repo.GetCategory(id);
            if (category == null)
            {
                return NotFound();
            }
            _repo.Delete(category);
            await _repo.SaveAll();

            return Ok(category);
        }

    }
}