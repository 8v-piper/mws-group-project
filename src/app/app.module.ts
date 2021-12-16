import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { BackEndComponent } from './back-end/back-end.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavigationComponent,
    SearchBarComponent,
    HomePageComponent,
    FooterComponent,
    FrontEndComponent,
    BackEndComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
