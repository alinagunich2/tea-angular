import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy{
public popap = false
private observ:Observable<boolean>
private subscribtion:Subscription |null = null

public arrQuestion = [
  true,
  false,
  false,
  false,
  false
]



constructor(
){


this.observ = new Observable((observ)=>{
let timeout =   setTimeout(()=>{
    observ.next(this.popap = true)
  },5000)
  return{
    unsubscribe(){
      clearTimeout(timeout)
    }
  }
})


}




ngOnInit(): void {
  this.subscribtion = this.observ
  .subscribe({
    next:((param:boolean)=>{
      console.log(param)
    })
  })



}

ngOnDestroy(){
  this.subscribtion?.unsubscribe()
  this.popap = false
 }


 Show(event:any){

  for(let i = 0;i<this.arrQuestion.length;i++){
    this.arrQuestion[i]=false
  }

  if(event.target){
    let id = (event.target as HTMLElement).getAttribute('id')
    this.arrQuestion[Number(id)]=true
  }
  
 
 }
}
