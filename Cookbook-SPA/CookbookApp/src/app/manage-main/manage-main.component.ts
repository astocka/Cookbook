import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-manage-main',
  templateUrl: './manage-main.component.html',
  styleUrls: ['./manage-main.component.css']
})
export class ManageMainComponent implements OnInit {
  recipes$: Object;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => (this.recipes$ = data));
  }

}
