import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveBookComponent } from './book/save-book/save-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { CreatePrestamoComponent } from './prestamo/create-prestamo/create-prestamo.component';
import { ListPrestamoComponent } from './prestamo/list-prestamo/list-prestamo.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'saveBook', component: SaveBookComponent },
   { path: 'listBook', component: ListBookComponent },
   { path: 'listPerson', component: ListPersonComponent },
   { path: 'createPresta', component: CreatePrestamoComponent },
   { path: 'listPresta', component: ListPrestamoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
