import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.css'
})
export class HamburgerComponent {
  @Input() menuOpen: boolean = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
