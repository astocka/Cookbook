import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';
import { RecipeFavComponent } from './recipe-fav/recipe-fav.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'details/:id', component: RecipeDetailsComponent },
    { path: 'category/:id', component: RecipeCategoryComponent }, //TODO
    { path: 'fav', component: RecipeFavComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
