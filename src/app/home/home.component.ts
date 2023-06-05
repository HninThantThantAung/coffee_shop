import { Component } from '@angular/core';
import { AllinoneServiceService } from '../allinone-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private allinoneservice: AllinoneServiceService){}

  foodAndDrinks : any = [];
  selecteditem: any =[];
  
  ngOnInit(){
    this.foodAndDrinks = this.allinoneservice.food_and_drinks;
  }
  selectedItem(item: any){
    let length = this.selecteditem.length;
    this.selecteditem[length] = item;
    console.log("selected item >>>", this.selecteditem);
  }
  getselectedItem(){
    return this.selecteditem;
  }
}
