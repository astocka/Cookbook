import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';
import { CategoryService } from '../_services/category.service';
import { SubcategoryService } from '../_services/subcategory.service';

declare var $: any;

@Component({
  selector: 'app-manage-main',
  templateUrl: './manage-main.component.html',
  styleUrls: ['./manage-main.component.css'],
})
export class ManageMainComponent implements OnInit {
  recipes$: Object;
  categories$: Object;
  subcategories$: Object;

  constructor(private recipeService: RecipeService, private categoryService: CategoryService,
    private subcategoryService: SubcategoryService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => (this.recipes$ = data));
    this.categoryService.getCategories().subscribe(data => (this.categories$ = data));
    this.subcategoryService.getSubcategories().subscribe(data => (this.subcategories$ = data));
  }

  showCategoryTab() {
    $('#manage-categories').toggle();
  }

  showSubcategoryTab() {
    $('#manage-subcategories').toggle();
  }

  showRecipeTab() {
    $('#manage-recipes').toggle();
  }
}
