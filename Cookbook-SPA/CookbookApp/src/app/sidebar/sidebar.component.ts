import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { SubcategoryService } from '../_services/subcategory.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories$: Object;
  subcategories$: Object;

  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => (this.categories$ = data));
    this.subcategoryService.getSubcategories().subscribe(data => (this.subcategories$ = data));
  }

}
