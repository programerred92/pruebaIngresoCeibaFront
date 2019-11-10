import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  listStock(){
    this.router.navigate(['/listStock']);
  }
  listBook(){
    this.router.navigate(['/listBook']);
  }
  saveBook(){
    this.router.navigate(['/saveBook']);
  }
  listPresta(){
    this.router.navigate(['/listPresta']);
  }
  listUser(){
    this.router.navigate(['/listPerson']);
  }
}
