import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveBookComponent } from './book/save-book/save-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'saveBook', component: SaveBookComponent },
   { path: 'listBook', component: ListBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
