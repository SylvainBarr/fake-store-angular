import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./view/not-found/not-found.component";
import {ProductsListComponent} from "./view/products-list/products-list.component";
import {CategoriesListComponent} from "./view/categories-list/categories-list.component";
import {ProductDetailsComponent} from "./view/product-details/product-details.component";
import {LoginComponent} from "./view/login/login.component";
import {ProfileComponent} from "./view/profile/profile.component";
import {authGuard} from "./guard/auth/auth.guard";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'produits'},
  {path: 'connexion', component: LoginComponent},
  {path: 'mon-profil',canActivate: [authGuard], component: ProfileComponent},
  {path: 'produits', children: [
      {path:'', component: ProductsListComponent},
      {path: 'categories', children: [
          {path: '', component: CategoriesListComponent},
          {path: ':name', component: ProductsListComponent}
        ]
      },
      {path: ':id', component: ProductDetailsComponent}
    ]
  },
  {path: 'introuvable', component: NotFoundComponent},
  {path: '**', redirectTo: 'introuvable'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
