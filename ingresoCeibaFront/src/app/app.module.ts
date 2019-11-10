import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookService } from './shared/service/book.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveBookComponent } from './book/save-book/save-book.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule } from './app-material.module';
import { ListBookComponent } from './book/list-book/list-book.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveBookComponent,
    ListBookComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule  
  ],
  providers: [
    {provide:BookService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
