import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { CatalogComponent } from './views/products/catalog/catalog.component';
import { ProductComponent } from './views/products/product/product.component';
import { OrderComponent } from './views/order/order.component';

const routes: Routes = [
 
 
 
  {
    path:'**',
   redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
