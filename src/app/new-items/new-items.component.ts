import { Component } from '@angular/core';
import { AllinoneServiceService } from '../allinone-service.service';

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})
export class NewItemsComponent {

  constructor(private allinoneservice: AllinoneServiceService){}

  newItems : any = [];

  ngOnInit(){
    this.newItems = this.allinoneservice.new_items;
  }
}
