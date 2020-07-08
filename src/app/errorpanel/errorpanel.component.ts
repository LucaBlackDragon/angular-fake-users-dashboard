import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errorpanel',
  templateUrl: './errorpanel.component.html',
  styleUrls: ['./errorpanel.component.scss']
})
export class ErrorpanelComponent implements OnInit {

  @Input() error: Error;

  constructor() { }

  ngOnInit(): void {
  }

}
