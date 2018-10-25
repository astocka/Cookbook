import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css']
})
export class RecipeCategoryComponent implements OnInit {
  categories$: Object;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => (this.categories$ = data));
  }

}
