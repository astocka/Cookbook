import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';
import { CategoryService } from '../_services/category.service';
import { SubcategoryService } from '../_services/subcategory.service';
import jquery from 'jquery';
import bootstrap from 'bootstrap';
import bootbox from 'bootbox';
import swal from 'sweetalert';
import { Category } from '../_models/category';
import { NgForm } from '@angular/forms';

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

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService
  ) {}

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

  addCategory(addCategoryForm: NgForm) {
    this.categoryService.addCategory(addCategoryForm);
  }

  resetAddCategoryForm(addCategoryForm: NgForm) {
    addCategoryForm.resetForm();
  }
}
