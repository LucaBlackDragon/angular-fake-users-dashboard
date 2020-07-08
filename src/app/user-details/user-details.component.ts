import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService, User, isError } from '../users.service';

@Component({
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  user: User;
  error: Error;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getUser(this.route.snapshot.paramMap.get('id'))
      .subscribe(user => this.initUserData(user));
  }

  initUserData(user: User|Error) {
    if (isError(user)) {
      console.error(user);
      this.error = user;
      return;
    }
    this.user = user;
    return;
  }

  get userPosition(): google.maps.LatLngLiteral {
    return {
      lat: Number.parseFloat(this.user.location.coordinates.latitude),
      lng: Number.parseFloat(this.user.location.coordinates.longitude),
    };
  }

}
