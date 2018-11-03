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

  editSubcategory(editSubcategoryForm: NgForm) {
    return this.http.put(this.url + 'subcategory/' + editSubcategoryForm.controls['editSubId'].value,
    {
      'Id': editSubcategoryForm.controls['editSubId'].value,
      'SubcategoryName': editSubcategoryForm.controls['editSubcategoryName'].value,
      'CategoryId': editSubcategoryForm.controls['editCatId'].value
    }).subscribe(data => { console.log('PUT Request is successfull', data);
  }, error => {
    console.log('Error', error);
  });
  }

  deleteSubcategory(id: number) {
    return this.http.delete(this.url + 'subcategory/' + id)
    .subscribe(data => { console.log('DELETE Request is successfull', data);
  }, error => { console.log('Error', error);
  });
  }
}
