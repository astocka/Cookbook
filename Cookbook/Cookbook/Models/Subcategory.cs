using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Cookbook.Models
{
    public class Subcategory
    {
        public int Id { get; set; }
        [Required]
        [DisplayName("Subcategory")]
        public string SubcategoryName { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
        [JsonIgnore]
        public ICollection<Recipe> Recipes { get; set; }

    }
}