using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Cookbook.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        [DisplayName("Category")]
        public string CategoryName { get; set; }

        public ICollection<Recipe> Recipes { get; set; }
        public ICollection<Subcategory> Subcategories { get; set; }
    }
}