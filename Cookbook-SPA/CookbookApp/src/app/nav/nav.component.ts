import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  recipes$: Object;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    $('#navbarCollapse').toggle();
  }

}
