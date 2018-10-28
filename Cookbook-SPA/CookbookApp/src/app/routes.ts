import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';
import { RecipeFavComponent } from './recipe-fav/recipe-fav.component';
import { ManageMainComponent } from './manage-main/manage-main.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'details/:id', component: RecipeDetailsComponent },
    { path: 'category/:name', component: RecipeCategoryComponent },
    // { path: 'category/:id', component: RecipeListComponent },
    { path: 'manage', component: ManageMainComponent },
    { path: 'fav', component: RecipeFavComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
