import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = environment.apiUrl;

constructor(private http: HttpClient) { }

getRecipes() {
  return this.http.get(this.url + 'recipes');
}

getRecipe(id) {
  return this.http.get(this.url + 'recipes/' + id);
}

}
