import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFavComponent } from './recipe-fav/recipe-fav.component';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'details/:id', component: RecipeDetailsComponent },
    { path: 'manage', component: ManageMainComponent },
    { path: 'manage-recipes', component: ManageRecipesComponent },
    { path: 'fav', component: RecipeFavComponent },
    { path: 'search', component: RecipeSearchComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
