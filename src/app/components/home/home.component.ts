import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CatnavigationComponent, SidenavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
