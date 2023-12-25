import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
// import { RouterModule } from '@angular/router';
// import { MainModule } from './views/main/main.module';
// import { ProductsModule } from './views/products/products.module';
// import { OrderModule } from './views/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    RouterModule
    // MainModule,
    // ProductsModule,
    // OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
