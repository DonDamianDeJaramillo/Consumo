import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from  '@angular/common/Http';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
