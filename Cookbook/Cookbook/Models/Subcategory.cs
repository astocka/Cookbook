using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

    }
}