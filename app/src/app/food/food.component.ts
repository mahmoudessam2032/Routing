import { Component } from '@angular/core';
import { ApifoodService } from '../apifood.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  constructor(_Apifoodservie:ApifoodService){
    _Apifoodservie.getData().subscribe({
      next:(data)=>{
        console.log(data)
      }
    })

  }

}
