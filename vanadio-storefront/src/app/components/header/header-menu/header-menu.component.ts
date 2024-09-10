import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  @Output() closeMenu = new EventEmitter<string>();
  @Input() menuToggle: boolean = false;

  onCloseMenu() {
    this.closeMenu.emit("menu closed");
  }
}
