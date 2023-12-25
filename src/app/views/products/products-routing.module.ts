import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:ProductComponent
  // },
  
  // {
  //   path:':id',
  //   component:ProductComponent
  // },
  // {
  //   path:'catalog',
  //   component:CatalogComponent
  // },

  {
    path:'',
    component:ProductComponent
  },
  
  {
    path:':id',
    component:ProductComponent
  },
  {
    path:'catalog',
    component:CatalogComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
