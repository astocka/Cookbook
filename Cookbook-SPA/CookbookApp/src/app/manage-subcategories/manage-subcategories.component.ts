import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../_services/subcategory.service';

@Component({
  selector: 'app-manage-subcategories',
  templateUrl: './manage-subcategories.component.html',
  styleUrls: ['./manage-subcategories.component.css']
})
export class ManageSubcategoriesComponent implements OnInit {
  subcategories$: Object;

  constructor(private subcategoryService: SubcategoryService) { }

  ngOnInit() {
    this.subcategoryService.getSubcategories().subscribe(data => (this.subcategories$ = data));
  }

}
