import { Component, OnInit, Input} from '@angular/core';
import { Libro } from '../../libro';

@Component({
  selector: 'app-titlebook',
  templateUrl: './title-book.component.html',
  styleUrls: ['./title-book.component.css']
})
export class TitleBookComponent implements OnInit {
  @Input() tittleBook: Libro;
  constructor() { }
 
  ngOnInit() {
  }

}
