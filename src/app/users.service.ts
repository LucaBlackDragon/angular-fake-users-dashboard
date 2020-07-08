import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, reduce, distinct, map } from 'rxjs/operators';
import { User } from './models/user';
import { Observable, of, merge } from 'rxjs';
import { uniqWith } from 'lodash'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiEndpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[] | Error> {
    return this.http
      .get<User[]>(`${this.apiEndpoint}/users`, {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        catchError((err) => {
          console.error('Errore nel download degli utenti', err);
          return of(new Error('impossibile caricare i dati degli utenti'));
        })
      );
  }

  getUsersPage(page = 0, pageSize = 50): Observable<User[] | Error> {
    return this.http
      .get<User[]>(
        `${this.apiEndpoint}/users?_page=${page}&_limit=${pageSize}`,
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        catchError((err) => {
          console.error('Errore nel download degli utenti', err);
          return of(new Error('impossibile caricare i dati degli utenti'));
        })
      );
  }

  getUser(id: string): Observable<User | Error> {
    return this.http
      .get<User>(`${this.apiEndpoint}/users/${id}`, {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        catchError((err) => {
          console.error(
            `Errore nel download dei dettagli dell'utente "${id}"`,
            err
          );
          return of(new Error("impossibile caricare i dati dell'utente"));
        })
      );
  }

  searchUser(text: string): Observable<User[]> {

    const nameSearch = this.http
      .get<User[]>(`${this.apiEndpoint}/users?name.first_like=${text}`);

    const surnameSearch = this.http
      .get<User[]>(`${this.apiEndpoint}/users?name.last_like=${text}`);

    return merge(nameSearch, surnameSearch)
      .pipe(
        map(users => uniqWith(users, (u1: User, u2: User) => u1.id === u2.id)),
        catchError((err) => {
          console.error('Errore nel download degli utenti', err);
          return of([]);
        })
      );
  }
}

export * from './models/user';

export function isError(response: any | Error): response is Error {
  return (response as Error).stack !== undefined;
}
