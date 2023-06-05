import { Component } from '@angular/core';
import { AllinoneServiceService } from '../allinone-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  selectedItemList?: any = [];
  // total: any;
  // temp: any;
  // itemquantity?: any = [];
  constructor(private allinone: AllinoneServiceService){}

  ngOnInit(){
    this.selectedItemList = this.allinone.seeSelectedItem();
    console.log("List", this.selectedItemList);
    console.log("to multiply number", this.selectedItemList[length].number);
    console.log("to multiply price", this.selectedItemList[length].price);
    // this.temp = this.selectedItemList[length].number * this.selectedItemList[length].price;
    // this.total =+ this.temp;

    // console.log("Total", this.total);
  }
  
  delete(deleteItem: any, index : number){
    this.selectedItemList.splice(index ,1)
  }

}
