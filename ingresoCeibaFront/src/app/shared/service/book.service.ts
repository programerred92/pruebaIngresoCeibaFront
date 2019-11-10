import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../../libro';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()


export class BookService {

  constructor(private http: HttpClient) {}
  book : any = [];  
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   baseurl = 'assets/data/smartphone.json';//poner la url del servicio

    CreateBook(data) {
      console.log('llego aca '+data.book_isbn+' y '+data.book_nombre)
    }
  // POST
  /*CreateBook(data): Observable<Libro> {
    console.log('llego aca '+data.book_isbn+' y '+data.book_nombre)
    return this.http.post<Libro>(this.baseurl + '/Libro/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }*/

    // GET
    GetBook(id): Observable<Libro> {
      return this.http.get<Libro>(this.baseurl + '/Libro/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }

      // GET
      GetBooks() {
        console.log("Hola si sirvo")
        this.http.get<Libro>(this.baseurl + '/Libro/',{
          params : {
            per_page:'9'
          }
        })
    .subscribe(data => {
      for (const d of (data as any)) {
        this.book.push({
          name: d.name,
          price: d.price
        });
      }
      console.log(this.book);
    });
      }
 /* GetBooks(): Observable<Libro> {
    return this.http.get<Libro>(this.baseurl + '/Libro/',{
      params : {
        per_page:'9'
      }
    })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }*/

    // PUT
    UpdateBook(id, data): Observable<Libro> {
      return this.http.put<Libro>(this.baseurl + '/Libro/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }

      // DELETE
  DeleteBook(id){
    return this.http.delete<Libro>(this.baseurl + '/Libro/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

