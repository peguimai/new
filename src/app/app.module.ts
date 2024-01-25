import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/*Importações Angular MAterial*/
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
/* Fecha Importações Angular MAterial*/

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    LoginComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
