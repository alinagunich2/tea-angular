import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogServisService } from 'src/app/core/auth/catalog-servis.service';
import { ProductType } from 'src/app/types/type-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  public product :ProductType={}as ProductType

  constructor(public catalogServisService:CatalogServisService,
    private activeRoute:ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void {
  this.activeRoute.params.subscribe((params)=>{
    console.log(params['id']+ 'это params')
    if(params['id']){
      this.catalogServisService.getProduct(+params['id'])
      .subscribe({
        next:(data)=>{
          this.product = data
        },
        error:(err)=>{
          this.router.navigate(['/'])
        }
      })
    }
  })
}

}
