using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cookbook.Models;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace Cookbook.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public  DbSet<Recipe> Recipes { get; set; }
    }
}
