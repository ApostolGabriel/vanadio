import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() menuToggle: boolean = false

  openMenu() {
    this.menuToggle = !this.menuToggle;
  }

  closeMenuFromChild(event: string) {
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
