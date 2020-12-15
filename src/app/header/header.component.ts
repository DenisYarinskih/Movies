import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  booleanValue: Boolean = false;

  //customText = "Dropdown button";
  constructor(){}
  ngOnInit() {}

  valueClick(){
    this.booleanValue = !this.booleanValue;
  }

}
