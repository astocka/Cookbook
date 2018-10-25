import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSubcategories() {
    return this.http.get(this.url + 'subcategory');
  }

}
