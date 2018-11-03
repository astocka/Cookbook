import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSubcategories() {
    return this.http.get(this.url + 'subcategory');
  }

  addSubcategory(addSubcategoryForm: NgForm) {
    return this.http
      .post(this.url + 'subcategory', {
        'SubcategoryName': addSubcategoryForm.controls['subcategoryName'].value,
        'CategoryId': addSubcategoryForm.controls['categoryId'].value
      })
      .subscribe(
        data => {
          console.log('POST Request is successfull', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }
}
