import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-etel',
  templateUrl: './etel.component.html',
  styleUrls: ['./etel.component.css']
})
export class EtelComponent implements OnInit {

  @Input() public etelNev:string;
  @Input() public etelLeiras:string;
  @Input() public etelKepUrl:any;

  constructor() { 
    this.etelNev  = "";
    this.etelLeiras = "";
    this.etelKepUrl = "";
  }

  ngOnInit(): void {
  }

}
