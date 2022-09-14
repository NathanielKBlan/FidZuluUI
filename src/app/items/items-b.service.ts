import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsBService {

  static readonly baseURL = 'http://localhost:3022/classB/';

  constructor(private http: HttpClient) { }

  getItemsB(): Observable<Item[]> {
     return this.http.get<Item[]>(ItemsBService.baseURL);
  }

  getBooks(): Observable<Item[]> {
      return this.http.get<Item[]>(ItemsBService.baseURL + 'books');
  }

  getDVDs(): Observable<Item[]> {
    return this.http.get<Item[]>(ItemsBService.baseURL + 'dvds');
  }

  getLaptops(): Observable<Item[]> {
    return this.http.get<Item[]>(ItemsBService.baseURL + 'laptops');
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it.
        console.error('An error occurred:', error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues 
        console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(() => 'Unable to contact service; please try again later.');
  };

}
