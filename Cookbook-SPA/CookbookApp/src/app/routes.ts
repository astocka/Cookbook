import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'details/:id', component: RecipeDetailsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
