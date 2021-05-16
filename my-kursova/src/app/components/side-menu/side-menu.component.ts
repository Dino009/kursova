import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {

  favoriteSeason: string | undefined;
  seasons: string[] = ['Friends', 'Pro', 'Other'];
  constructor() { }

  ngOnInit(): void {
  }

}
