import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { SubcategoryService } from '../_services/subcategory.service';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories$: Object;
  subcategories$: Object;
  category$: string;

  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => (this.categories$ = data));
    this.subcategoryService.getSubcategories().subscribe(data => (this.subcategories$ = data));
  }
  categoryRecipes(category) {
    this.recipeService.getCategoryRecipes(this.category$).subscribe(data => (category = data));
  }

}
