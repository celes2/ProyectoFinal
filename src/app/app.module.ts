import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { UnidadComponent } from './page/unidad/unidad.component';
import { CompartirComponent } from './page/compartir/compartir.component';
import { TobillerasComponent } from './page/tobilleras/tobilleras.component';
import { SetComponent } from './page/set/set.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {ContactoComponent } from './page/contacto/contacto.component';
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button'; 
import {OrderListModule} from 'primeng/orderlist';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UnidadComponent,
    CompartirComponent,
    TobillerasComponent,
    SetComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MenubarModule,
    CarouselModule,
    ImageModule,
    DataViewModule,
    CardModule,
    SelectButtonModule,
    ToggleButtonModule,
    RadioButtonModule,
    ButtonModule,
    OrderListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
