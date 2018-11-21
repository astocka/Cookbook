import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../_models/recipe';
import { NgForm } from '@angular/forms';
import { puts } from 'util';

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
      'Ingredients': addRecipeForm.controls['ingredients'].value,
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

editRecipe(editRecipeForm: NgForm) {
  return this.http.put(this.url + 'recipes/' + editRecipeForm.controls['editId'].value,
    {
      'Id': editRecipeForm.controls['editId'].value,
      'CategoryId': editRecipeForm.controls['editCategoryId'].value,
      'SubcategoryId': editRecipeForm.controls['editSubcategoryId'].value,
      'Name': editRecipeForm.controls['editName'].value,
      'Ingredients': editRecipeForm.controls['ingredients'].value,
      'Description': editRecipeForm.controls['editDescription'].value,
      'Time': editRecipeForm.controls['editTime'].value,
      'Portion': editRecipeForm.controls['editPortion'].value,
      'Favourite': editRecipeForm.controls['editFavourite'].value,
      'Rating': editRecipeForm.controls['editRating'].value
    }).subscribe(data => { console.log('PUT Request is successfull', data);
  }, error => {
    console.log('Error', error);
  });
}

addToFav(recipe: Recipe) {
  return this.http.put(this.url + 'recipes/' + recipe.id,
  {
      'Id': recipe.id,
      'CategoryId': recipe.categoryId,
      'SubcategoryId': recipe.subcategoryId,
      'Ingredients': recipe.ingredients,
      'Name': recipe.name,
      'Description': recipe.description,
      'Time': recipe.time,
      'Portion': recipe.portion,
      'Favourite': true,
      'Rating': recipe.rating
  }).subscribe(data => { console.log('PUT Request is successfull', data);
}, error => { console.log('Error', error);
});
}

}
