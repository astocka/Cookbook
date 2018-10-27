import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-recipe-fav',
  templateUrl: './recipe-fav.component.html',
  styleUrls: ['./recipe-fav.component.css']
})
export class RecipeFavComponent implements OnInit {
  recipes$: Object;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => this.recipes$ = data);
  }

}
