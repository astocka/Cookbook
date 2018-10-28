import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css']
})
export class RecipeCategoryComponent implements OnInit {
  categoryRecipes$: Object;
  // id: number;
  name: Object;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.categoryRecipes$ = params.name);
   }

  ngOnInit() {
    // this.recipeService.getCategoryRecipes(this.id).subscribe(data => (this.recipes$ = data));
    // this.recipeService.getRecipes().subscribe(x => this.recipes$ = x);
    this.recipeService.getRecipes().subscribe(data => (this.categoryRecipes$ = data));


  }

}
