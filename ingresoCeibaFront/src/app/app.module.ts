import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookService } from './shared/book.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SaveBookComponent } from './save-book/save-book.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SaveBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
