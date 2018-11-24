import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { appRoutes } from './routes';
import { RecipeService } from './_services/recipe.service';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CategoryService } from './_services/category.service';
import { SubcategoryService } from './_services/subcategory.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFavComponent } from './recipe-fav/recipe-fav.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RecipeListComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    RecipeFavComponent,
    ManageRecipesComponent,
    ManageMainComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    RecipeService,
    CategoryService,
    SubcategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
