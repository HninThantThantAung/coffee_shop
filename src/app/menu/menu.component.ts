import { Component } from '@angular/core';
import { AllinoneServiceService } from '../allinone-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private allinoneservice: AllinoneServiceService){}

  menu: any = [];

  ngOnInit(){
    this.menu = this.allinoneservice.menu;
  }
}
