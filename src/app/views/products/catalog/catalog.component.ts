import { Component, OnInit } from '@angular/core';
import { CatalogServisService } from 'src/app/core/auth/catalog-servis.service';
import { ProductType } from 'src/app/types/type-product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{

  public loader:boolean = false

  public products:ProductType[]=[]

constructor( private catalosServise:CatalogServisService){

}

ngOnInit(): void {
  this.loader = true
  this.catalosServise.getCatalog()
  .subscribe((products:any)=>{
    this.loader = false
    this.products = products
    console.log(this.products)
  })
}

}
