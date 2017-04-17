import { Component, OnInit } from '@angular/core';
import { menuItemsList } from './menu-items-list';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {
  btn;
  list;
  activeSubmenu;
  mode = 'side';
  constructor(
    private router: Router,
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.windowWidth();
      }
    });
  }

  ngOnInit() {
    if(this.router.url === '/')
      this.router.navigate(['users']);

    this.windowWidth();
    this.list = menuItemsList;

  }

  closeSlideNav() {
    this.windowWidth();
  };

  windowWidth() {
    if (window.innerWidth < 768) {
      this.mode = 'over';
      this.btn = false;
    } else {
      this.mode = 'side';
      this.btn = true;
    }
  }
  buttonStatus(status) {
    this.btn = !!status;
  }
  toggleSubmenu(name) {
    if (name === this.activeSubmenu) {
      this.activeSubmenu = null;
    } else {
      this.activeSubmenu = name;
    }
  }
  isActive(instruction): boolean {
    const arr = this.router.url.split('/');
    return arr[1] === instruction;
  }
}
