import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {

  cars: string[]=[]

  constructor() { }

  ngOnInit() {
      this.cars = []
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sJRxXM916KamnV9j5GEBLyX0JLU850JhIcwdLh8&s"
  }

}
