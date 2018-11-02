import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RecipeService } from './recipe.service';
import { Category } from '../_models/category';
import jquery from 'jquery';
import { NgForm } from '@angular/forms';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl;
  category: Object;

constructor(private http: HttpClient) { }

getCategories() {
  return this.http.get(this.url + 'category');
}

getCategory(id) {
  return this.http.get(this.url + 'category/' + id);
}

addCategory(addCategoryForm: NgForm) {
  return this.http.post(this.url + 'category',
  {
    'CategoryName': addCategoryForm.controls['categoryName'].value
  }).subscribe(data => { console.log('POST Request is successfull', data);
},
error => {
  console.log('Error', error);
});
}

deleteCategory(id: number) {
  return this.http.delete(this.url + 'category/' + id)
  .subscribe(data => { console.log('DELETE Request is successfull', data);
}, error => { console.log('Error', error);
});
}

}
