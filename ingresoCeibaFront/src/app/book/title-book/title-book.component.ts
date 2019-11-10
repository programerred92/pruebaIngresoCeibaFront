import { Component, OnInit, Input} from '@angular/core';
import { Libro } from '../../libro';
import { BookService } from '../../shared/service/book.service';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-titlebook',
  templateUrl: './title-book.component.html',
  styleUrls: ['./title-book.component.css'],
  providers:[BookService, MenuComponent]
})
export class TitleBookComponent implements OnInit {
  @Input() tittleBook: Libro;
  persons: any = [];
  constructor() { }
 
  ngOnInit() {
  }

}
