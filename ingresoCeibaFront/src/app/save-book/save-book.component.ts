import { BookService } from '../shared/book.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css']
})
export class SaveBookComponent implements OnInit {
  bookForm: FormGroup;
  bookArr: any = [];
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bookService: BookService
  ) { }

  ngOnInit() {
    this.addBook()
  }

  addBook() {
    this.bookForm = this.fb.group({
      book_isbn: [''],
      book_nombre: ['']
    })
  }

  submitForm() {
    this.bookService.CreateBook(this.bookForm.value).subscribe(res => {
      console.log('book added!')
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    });
  }
}
