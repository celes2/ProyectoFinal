import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = []

  ngOnInit() {
    this.items = [
        {
          label: 'Home',
          routerLink:'home',
          icon:"pi pi-home"
        },
        {
          label: 'Contacto',
          routerLink:'contacto',
          icon: 'pi pi-phone'
        },
        {
          label: 'Tienda',
          icon:"pi pi-shopping-bag",
        items:[
          {
            label:"Pulseras",
            routerLink:'unidad',
            icon: "pi pi-heart-fill"
          },
          {
            label:"Pulseras para compartir",
            routerLink:'compartir',
            icon: "pi pi-heart-fill"
          },
          {
            label: "Set de pulseras",
            routerLink:'set',
            icon: "pi pi-heart-fill"
          },
          {
            label: 'Tobilleras',
            routerLink:'tobilleras',
            icon: "pi pi-heart-fill"
          }
        ]
        }
    ];
  }
}


