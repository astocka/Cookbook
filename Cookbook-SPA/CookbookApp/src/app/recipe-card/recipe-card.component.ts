import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../_models/recipe';
import { Category } from '../_models/category';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

}
