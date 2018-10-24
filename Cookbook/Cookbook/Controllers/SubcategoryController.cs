using System.Threading.Tasks;
using Cookbook.Data;
using Cookbook.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cookbook.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class SubcategoryController : ControllerBase
    {
        private readonly ISubcategoryRepository _repo;
        public SubcategoryController(ISubcategoryRepository repo)
        {
            _repo = repo;
        }

        // GET: api/subcategory
        [HttpGet]
        public async Task<IActionResult> GetSubcategories()
        {
            var subcategories = await _repo.GetSubcategories();
            return Ok(subcategories);
        }

        // GET: api/subcategory/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubcategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subcategory = await _repo.GetSubcategory(id);

            if (subcategory == null)
            {
                return NotFound();
            }

            return Ok(subcategory);
        }

        // PUT: api/subcategory/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubcategory([FromRoute] int id, [FromBody] Subcategory subcategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subcategory.Id)
            {
                return BadRequest();
            }

            _repo.Update(subcategory);
            try
            {
                await _repo.SaveAll();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new System.Exception($"Updating subcategory {id} failed on save.");
            }

            return NoContent();
        }

        // POST: api/subcategory
        [HttpPost]
        public async Task<IActionResult> PostSubcategory([FromBody] Subcategory subcategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _repo.Add(subcategory);
            await _repo.SaveAll();

            return CreatedAtAction("GetSubcategory", new { id = subcategory.Id }, subcategory);
        }

        // DELETE: api/subcategory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubcategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subcategory = await _repo.GetSubcategory(id);
            if (subcategory == null)
            {
                return NotFound();
            }
            _repo.Delete(subcategory);
            await _repo.SaveAll();

            return Ok(subcategory);
        }

    }
}