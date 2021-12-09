import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row class="footer">
      <span>copyright 2021</span>
    </mat-toolbar-row>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
