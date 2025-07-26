import { Component } from '@angular/core';
import { ScrollShrinkDirective } from '../../../shared/directives/scroll-shrink.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ScrollShrinkDirective, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
