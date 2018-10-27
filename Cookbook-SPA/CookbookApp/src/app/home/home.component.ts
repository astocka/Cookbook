import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';
import { CategoryService } from '../_services/category.service';
import { SubcategoryService } from '../_services/subcategory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
