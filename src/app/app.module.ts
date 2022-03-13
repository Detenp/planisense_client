import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GenreComponent } from './genre/genre.component';
import { ArrondissementComponent } from './arrondissement/arrondissement.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    ArrondissementComponent
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
