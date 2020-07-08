import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, reduce } from 'rxjs/operators';
import { User } from './models/user';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiEndpoint = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiEndpoint}/users`, {
      observe: 'body',
      responseType: 'json',
    })
      .pipe<User[]>(
        catchError((err) => {
          console.error('Errore nel download degli utenti', err);
          return [];
        })
      );
  }

  getUsersPage(page = 0, pageSize = 50) {
    return this.http.get<User[]>(`${this.apiEndpoint}/users?_page=${page}&_limit=${pageSize}`, {
      observe: 'body',
      responseType: 'json',
    })
      .pipe<User[]>(
        catchError((err) => {
          console.error('Errore nel download degli utenti', err);
          return [];
        }),
      );
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiEndpoint}/users/${id}`, {
      observe: 'body',
      responseType: 'json',
    })
      .pipe(
        catchError((err) => {
          console.error(`Errore nel download dei dettagli dell'utente "${id}"`, err);
          return null as ObservableInput<User>;
        })
      );
  }

}

export * from './models/user';
