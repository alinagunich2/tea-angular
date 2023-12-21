import { Observable,tap} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductType } from '../../types/type-product';
import { OrderType } from '../../types/type-order';

@Injectable({
  providedIn: 'root'
})
export class CatalogServisService {

  constructor(
    private http:HttpClient
  ) { }


getCatalog():Observable<ProductType[]>{
return this.http.get<ProductType[]>('https://testologia.site/tea')
.pipe(
  tap((result)=>{
    console.log(result)
  })
)
}

getProduct(id:number):Observable<ProductType>{
  return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
  .pipe(
    tap((result)=>{
      console.log(result)
    })
  )
  }

  createOrder(body:OrderType):Observable<{success:number}>{
    return this.http.post<{success:number}>('https://testologia.site/order-tea',body)
  }

}
