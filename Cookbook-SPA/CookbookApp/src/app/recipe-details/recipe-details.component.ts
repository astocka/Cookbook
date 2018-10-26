import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails$: Object;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.recipeDetails$ = params.id);
   }

  ngOnInit() {
    this.recipeService.getRecipe(this.recipeDetails$).subscribe(data => this.recipeDetails$ = data);
  }

}
