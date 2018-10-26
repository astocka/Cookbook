import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css']
})
export class RecipeCategoryComponent implements OnInit {
  categories$: Object;
  recipes$: Object;
  categoryName: string;

  constructor(private categoryService: CategoryService, private recipeService: RecipeService, private recipes: RecipeListComponent) { }

  ngOnInit() {
    this.recipeService.getCategoryRecipes(this.categoryName).subscribe(data => (this.recipes$ = data));

  }

}
