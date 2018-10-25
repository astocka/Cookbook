import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../_services/subcategory.service';

@Component({
  selector: 'app-recipe-subcategory',
  templateUrl: './recipe-subcategory.component.html',
  styleUrls: ['./recipe-subcategory.component.css']
})
export class RecipeSubcategoryComponent implements OnInit {
  subcategories$: Object;

  constructor(private subcategoryService: SubcategoryService) { }

  ngOnInit() {
    this.subcategoryService.getSubcategories().subscribe(data => (this.subcategories$ = data));
  }

}
