import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  myControl: any;
  auto: any;
  hidden = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
