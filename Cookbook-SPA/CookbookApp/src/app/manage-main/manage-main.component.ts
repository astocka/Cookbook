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
  selectCategories$ = this.categoryService.getCategories().subscribe(data =>  (this.selectCategories$ = data));
  selectedCategory: number;

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
    // this.categoryService.getCategories().subscribe(data =>  (this.selectCategories$ = data));
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
      editCategoryName: name
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
      subcategoryName: ''
    });
  }
  addSubcategory(subcategoryForm: NgForm) {
    this.subcategoryService.addSubcategory(subcategoryForm);
  }
}
