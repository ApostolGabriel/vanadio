import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  menuToggle: boolean = false;
  
  constructor(private router: Router) {}

  openMenu() {
    this.menuToggle = !this.menuToggle;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
