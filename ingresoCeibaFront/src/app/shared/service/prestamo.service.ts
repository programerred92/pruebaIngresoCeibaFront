import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestamo } from '../../Prestamo';
@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(protected http: HttpClient) { }

  getPrestamos() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

  CreatePrestamo(data) {
    console.log('oelo '+data.fecha_prestamo+' y '+data.Fecha_entrega)
  }
// POST
/*CreatePrestamo(data): Observable<Prestamo> {
  console.log('llego aca '+data.book_isbn+' y '+data.book_nombre)
  return this.http.post<Libro>(this.baseurl + '/Libro/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1), diag 76 #48c - 77
    catchError(this.errorHandl)
  )
}*/
}
