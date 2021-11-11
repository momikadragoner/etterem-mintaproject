import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etlap',
  templateUrl: './etlap.component.html',
  styleUrls: ['./etlap.component.css']
})
export class EtlapComponent implements OnInit {

  public etelek = [
    {nev: "Rantotthús", leiras: "Nagyon fini", kepUrl: "/assets/rantotthus.jpg"},
    {nev: "Gertike kedvence", leiras: "Nyami, nyami kajcsi", kepUrl: "/assets/gertike.jpg"},
    {nev: "Sült oldalas", leiras: "Rőff, röff"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
