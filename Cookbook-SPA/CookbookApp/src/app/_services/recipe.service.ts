import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../_models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = environment.apiUrl;
  categoryName: string;

constructor(private http: HttpClient) { }

getRecipes() {
  return this.http.get(this.url + 'recipes');
}

getRecipe(id) {
  return this.http.get(this.url + 'recipes/' + id);
}

// getCategoryRecipes(categoryName) {
//   return this.http.get(this.url + 'recipes/' + categoryName);
// }

getCategoryRecipes(id) {
  return this.http.get(this.url + 'recipes/' + id);
}

// getFavRecipes() {
//   return this.http.get(this.url + 'recipes')
// }

}
