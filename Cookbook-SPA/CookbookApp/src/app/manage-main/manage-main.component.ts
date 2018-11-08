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
  selectCategories$ = this.categoryService.getCategories().subscribe(data => (this.selectCategories$ = data));
  selectedCategory: number;
  selectedSubcategory: number;
  selectSubcategories$ = this.subcategoryService.getSubcategories().subscribe(dataX => (this.selectSubcategories$ = dataX));
  sc: number;

  // private value: any = {};

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService
  ) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => (this.recipes$ = data));
    this.categoryService.getCategories().subscribe(data => (this.categories$ = data));
    this.subcategoryService.getSubcategories().subscribe(data => (this.subcategories$ = data));
    $('#edit-recipe').hide();
  }
  showCategoryTab() {
    $('#manage-categories').toggle();
    $('#manage-subcategories').hide();
    $('#manage-recipes').hide();
    $('.nav-categories').toggleClass('bg-primary text-light');
  }

  showSubcategoryTab() {
    $('#manage-subcategories').toggle();
    $('#manage-categories').hide();
    $('#manage-recipes').hide();
    $('.nav-subcategories').toggleClass('bg-primary text-light');
  }

  showRecipeTab() {
    $('#manage-recipes').toggle();
    $('#manage-categories').hide();
    $('#manage-subcategories').hide();
    $('.nav-recipes').toggleClass('bg-primary text-light');
  }

  showAddRecipeTab() {
    $('#manage-addRecipes').toggle();
    $('#manage-categories').hide();
    $('#manage-subcategories').hide();
    $('#manage-recipes').hide();
    $('.nav-addRecipes').toggleClass('bg-primary text-light');
  }

  // Manage Category
  addCategory(addCategoryForm: NgForm) {
    this.categoryService.addCategory(addCategoryForm);
  }

  resetForm(form: NgForm) {
    form.resetForm();
    $('#category-number').text(0);
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id);
  }

  editCategoryOption(id: number, name: string, editCategoryForm: NgForm) {
    editCategoryForm.resetForm({
      editId: id,
      editCategoryName: name,
    });
  }

  editCategory(editCategoryForm: NgForm) {
    this.categoryService.editCategory(editCategoryForm);
  }

  // Manage Subcategory
  selectedCategoryEvent(event: any, addSubcategoryForm: NgForm) {
    this.selectedCategory = event.target.value;
    addSubcategoryForm.resetForm({
      categoryId: event.target.value,
      subcategoryName: '',
    });
  }
  addSubcategory(subcategoryForm: NgForm) {
    this.subcategoryService.addSubcategory(subcategoryForm);
  }

  editSubcategory(editSubcategoryForm: NgForm) {
    this.subcategoryService.editSubcategory(editSubcategoryForm);
  }

  editSubcategoryOption(id: number, name: string, category: number, editSubcategoryForm: NgForm) {
    editSubcategoryForm.resetForm({
      editSubId: id,
      editSubcategoryName: name,
      editCatId: category,
    });
  }

  deleteSubcategory(id) {
    this.subcategoryService.deleteSubcategory(id);
  }

  // Manage Recipes
  addRecipe(addRecipeForm: NgForm) {
    this.recipeService.addNewRecipe(addRecipeForm);
  }

  deleteRecipe(id) {
    this.recipeService.deleteRecipe(id);
  }

  showEditRecipeOption(recipe: any, editRecipeForm: NgForm) {
    $('#edit-recipe').show();
    editRecipeForm.resetForm({
      editId: recipe.id,
      editCategoryId: recipe.category.id,
      editSubcategoryId: recipe.subcategory.id,
      editName: recipe.name,
      editDescription: recipe.description,
      editTime: recipe.time,
      editPortion: recipe.portion,
      editFavourite: recipe.favourite,
      editRating: recipe.rating,
    });
  }

  editRecipe(editRecipeForm: NgForm) {
    this.recipeService.editRecipe(editRecipeForm);
  }
}
