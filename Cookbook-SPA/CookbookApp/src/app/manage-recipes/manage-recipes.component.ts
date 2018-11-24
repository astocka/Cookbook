import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.css']
})
export class ManageRecipesComponent implements OnInit {
  // recipes$: Object;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeService.getRecipes().subscribe(data => (this.recipes$ = data));
  }

}
