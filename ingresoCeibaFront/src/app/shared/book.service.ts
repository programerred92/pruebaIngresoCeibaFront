import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

const baseurl = 'assets/data/smartphone.json';//poner la url del servicio
export class BookService {

  constructor(private http: HttpClient) {}
    
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   

  // POST
  CreateBook(data): Observable<Libro> {
    return this.http.post<Libro>(baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // GET
    GetBook(id): Observable<Libro> {
      return this.http.get<Libro>(baseurl + '/bugtracking/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }

      // GET
  GetBooks(): Observable<Libro> {
    return this.http.get<Libro>(baseurl + '/bugtracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // PUT
    UpdateBook(id, data): Observable<Libro> {
      return this.http.put<Libro>(baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }

      // DELETE
  DeleteBook(id){
    return this.http.delete<Libro>(baseurl + '/bugtracking/' + id, this.httpOptions)
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

