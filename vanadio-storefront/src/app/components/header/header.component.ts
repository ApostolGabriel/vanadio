import {Component, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuToggle: boolean = false;


  openMenu() {
    this.menuToggle = !this.menuToggle;
  }

  closeMenu() {
    this.menuToggle = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth > 710) {
      this.menuToggle = false;
    }
  }

}
