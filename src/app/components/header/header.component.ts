import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const dropdownMenu = document.querySelector('.dropdown-menu') as HTMLElement;
    if (dropdownMenu) {
      dropdownMenu.style.visibility = this.isMenuOpen ? 'visible' : 'hidden';
    }
    const headerContent = document.querySelector('.header-content') as HTMLElement;
    if (headerContent) {
      headerContent.style.borderTopLeftRadius = this.isMenuOpen ? '10px' : '30px';
      headerContent.style.borderTopRightRadius = this.isMenuOpen ? '10px' : '30px';
      headerContent.style.borderBottomLeftRadius = this.isMenuOpen ? '0' : '30px';
      headerContent.style.borderBottomRightRadius = this.isMenuOpen ? '0' : '30px';
    }

    const logoImg = document.querySelector('.logo img') as HTMLImageElement;
    if (logoImg) {
      logoImg.src = this.isMenuOpen 
        ? '../../../assets/Logo_yellow.png'  // Imagen cuando el menú está abierto
        : '../../../assets/Logo_black.png';  // Imagen cuando el menú está cerrado
    }

  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.header-content') && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

 /*  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    this.toggleMenu();
  } */

  ngOnInit() {

  }

}
