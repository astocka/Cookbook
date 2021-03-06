﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Cookbook.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public decimal Time { get; set; }
        public int Portion { get; set; }
        public bool Favourite { get; set; }
        public int Rating { get; set; }
        public string Ingredients { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }

        public int SubcategoryId { get; set; }
        [ForeignKey("SubcategoryId")]
        public Subcategory Subcategory { get; set; }
    }
}
