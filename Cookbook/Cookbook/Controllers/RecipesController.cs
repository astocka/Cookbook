using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Cookbook.Data;
using Cookbook.Models;

namespace Cookbook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly IRecipeRepository _repository;
        public RecipesController(IRecipeRepository repository)
        {
            _repository = repository;
        }

        // GET: api/Recipes
        [HttpGet]
        public async Task<IActionResult> GetRecipes()
        {
            var recipes = await _repository.GetRecipes();
            return Ok(recipes);
        }

        // GET: api/Recipes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecipe([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = await _repository.GetRecipe(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        // PUT: api/Recipes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe([FromRoute] int id, [FromBody] Recipe recipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != recipe.Id)
            {
                return BadRequest();
            }

            _repository.Update(recipe);
            try
            {
                await _repository.SaveAll();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new System.Exception($"Updating user {id} failed on save.");
            }

            return NoContent();
        }

        // POST: api/Recipes
        [HttpPost]
        public async Task<IActionResult> PostRecipe([FromBody] Recipe recipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repository.Add(recipe);
            await _repository.SaveAll();

            return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
        }

        // DELETE: api/Recipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = await _repository.GetRecipe(id);
            if (recipe == null)
            {
                return NotFound();
            }
            _repository.Delete(recipe);
            await _repository.SaveAll();

            return Ok(recipe);
        }
    }
}