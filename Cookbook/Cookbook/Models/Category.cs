using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Cookbook.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        [DisplayName("Category")]
        public string CategoryName { get; set; }

        [JsonIgnore]
        public ICollection<Recipe> Recipes { get; set; }
        [JsonIgnore]
        public ICollection<Subcategory> Subcategories { get; set; }
    }
}