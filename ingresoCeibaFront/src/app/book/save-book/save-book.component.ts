import { Component, OnInit, NgZone } from '@angular/core';
import { BookService } from '../../shared/service/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuComponent } from '../../shared/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'saveBook',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css'],
  providers:[BookService, MenuComponent]
})
export class SaveBookComponent implements OnInit {
  bookForm: FormGroup;
  bookArr: any = [];
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private bookService: BookService
    ) { }

  ngOnInit() {
    this.addBook();
  }

  addBook() {
    this.bookForm = this.fb.group({
      isbn: ['', Validators.required],
      nombre: ['', Validators.required]
    })
  }

  submitForm() {
    console.log('llego aca '+this.bookForm.value.isbn+' y '+this.bookForm.value.nombre)
    this.bookService.CreateBook(this.bookForm.value)
    .subscribe(data => {
      console.log("POst ok", data);
    },
    error=>{
console.log("error: ",error)
    });
      //this.bookService.CreateBook(this.bookForm.value).subscribe(res => {
      //console.log('book added!')
      //this.ngZone.run(() => this.router.navigateByUrl('/saveBook'))
    //});
  }
}
