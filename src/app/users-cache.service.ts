import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersCacheService {

  public users: User[] = [];
  public pagesLoaded: number = 1;

  constructor() { }
}
