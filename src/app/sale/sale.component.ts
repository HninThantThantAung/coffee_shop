import { Component } from '@angular/core';
import { AllinoneServiceService } from '../allinone-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

  constructor(private allinoneservice: AllinoneServiceService){}

  allItem: any =[];
  selectitem: any = [];
  // quantity: number = 0;
  quantity = new FormControl('');
  searchText: any;

  ngOnInit(){
    this.allItem = this.allinoneservice.allitem;
  }
  addToCart(selectItem: any, index: any){
    this.selectitem = selectItem;
    console.log("selected item >>>", this.selectitem);
    console.log("quantity >>> ", this.quantity.value);
    localStorage.setItem('data', JSON.stringify(this.selectitem));
    localStorage.setItem('quan', JSON.stringify({number: Number(this.quantity.value)}));
    console.log("stringfy data", JSON.stringify(this.selectitem));
    console.log("quantity setItem", JSON.stringify({number: Number(this.quantity.value)}));
  }
}
