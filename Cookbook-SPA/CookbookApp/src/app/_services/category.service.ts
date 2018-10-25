import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl;

constructor(private http: HttpClient) { }

getCategories() {
  return this.http.get(this.url + 'category');
}

getCategory(id) {
  return this.http.get(this.url + 'category/' + id);
}
}
