import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../_models/recipe';
import { NgForm } from '@angular/forms';

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

getCategoryRecipes(id) {
  return this.http.get(this.url + 'recipes/' + id);
}

addNewRecipe(addRecipeForm: NgForm) {
  return this.http
    .post(this.url + 'recipes', {
      'Name': addRecipeForm.controls['name'].value,
      'Description': addRecipeForm.controls['description'].value,
      'Time': addRecipeForm.controls['time'].value,
      'Portion': addRecipeForm.controls['portion'].value,
      'Favourite': addRecipeForm.controls['favourite'].value,
      'Rating': addRecipeForm.controls['rating'].value,
      'CategoryId': addRecipeForm.controls['categoryId'].value,
      'SubcategoryId': addRecipeForm.controls['subcategoryId'].value
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

deleteRecipe(id: number) {
  return this.http.delete(this.url + 'recipes/' + id)
  .subscribe(data => { console.log('DELETE Request is successfull', data);
}, error => { console.log('Error', error);
});
}

}
