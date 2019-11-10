import { Component, OnInit, NgZone } from '@angular/core';
import { PersonService } from '../../shared/service/person.service';
import { MenuComponent } from '../../shared/menu/menu.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listperson',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
  providers:[PersonService, MenuComponent]
})
export class ListPersonComponent implements OnInit {
  persons: any[] = [];
  constructor(
    protected personService : PersonService,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {
    this.personService.getUsers()
    .subscribe(
      (data)=>{
        this.persons = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
