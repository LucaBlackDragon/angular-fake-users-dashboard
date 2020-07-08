import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UsersService, User, isError } from '../users.service';
import { UsersCacheService } from '../users-cache.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  error: Error;
  myControl = new FormControl();

  constructor(
    private usersService: UsersService,
    private usersCache: UsersCacheService,
  ) { }

  ngOnInit(): void {
    if (this.usersCache.users.length <= 0) {
      this.getNextPage();
    }
  }

  getNextPage() {
    this.error = undefined;
    this.usersService.getUsersPage(this.usersCache.pagesLoaded)
      .subscribe(users => {
        if (isError(users)) {
          this.error = users;
          console.error(users);
          return;
        }
        this.usersCache.pagesLoaded++;
        this.usersCache.users.push(...users);
      });
  }

  get users() {
    return this.usersCache.users;
  }

  get usersCount() {
    return this.users?.length ?? 0;
  }

  autocompleteDisplayFn(user: User) {
    return user ? `${user.name.first} ${user.name.last}` : '';
  }

}
