import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EtlapComponent } from './etlap/etlap.component';
import { HelyszinComponent } from './helyszin/helyszin.component';
import { AdminComponent } from './admin/admin.component';
import { EtelComponent } from './etlap/etel/etel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EtlapComponent,
    HelyszinComponent,
    AdminComponent,
    EtelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
