import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
})
export class MainToolbarComponent implements OnInit {

  @Input() showNavigationButtons: boolean = true;

  constructor(
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }

  forward() {
    this.location.forward();
  }

}
