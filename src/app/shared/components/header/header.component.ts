import { Component } from '@angular/core';
import { ScrollShrinkDirective } from '../../../shared/directives/scroll-shrink.directive';

@Component({
  selector: 'app-header',
  imports: [ScrollShrinkDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
