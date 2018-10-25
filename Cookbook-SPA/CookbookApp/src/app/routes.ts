import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipeCategoryComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
