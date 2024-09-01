import {Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  @Output() closeMenu = new EventEmitter<string>();

  menuToggle: boolean = true;
  onCloseMenu() {
    this.menuToggle = false;
    this.closeMenu.emit("menu closed");
  }
}
