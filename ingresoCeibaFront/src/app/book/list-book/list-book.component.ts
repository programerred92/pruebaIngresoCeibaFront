import { Component, OnInit, NgZone  } from '@angular/core';
import { BookService } from '../../shared/service/book.service';
import { FormBuilder } from '@angular/forms';
import { MenuComponent } from '../../shared/menu/menu.component';
import { Router } from '@angular/router';
import { TitleBookComponent } from '../title-book/title-book.component';
import { Libro } from 'src/app/libro';


@Component({
  selector: 'app-listbook',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
  providers:[BookService, MenuComponent]
})
export class ListBookComponent implements OnInit {
  
  bookArr: any = [];
  constructor(public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private bookService: BookService) { }
    
  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this.bookService.GetBooks().subscribe(
      (data)=>{
        this.bookArr = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateBook(){
    this.bookService.UpdateBook().subscribe(
      (data)=>{
        this.bookArr = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  deleteBook(){}
}
