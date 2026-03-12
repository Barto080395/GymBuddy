// cursor.directive.ts
import { Directive, HostListener, Input, inject } from '@angular/core';
import { CursorService, CursorType } from './cursor.service';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {
  @Input('appCursor') cursorType: CursorType = 'default';
  private cursor = inject(CursorService);

  @HostListener('mouseenter', ['$event.target'])
  onEnter(target: EventTarget | null) {
    if (!target) return;
    this.cursor.setCursor(this.cursorType, target as HTMLElement);
  }
  
  @HostListener('mouseleave', ['$event.target'])
  onLeave(target: EventTarget | null) {
    if (!target) return;
    this.cursor.reset(target as HTMLElement);
  }
  

  @HostListener('mousedown') onDown() {
    if (this.cursorType === 'grab') {
      this.cursor.setCursor('grabbing');
    }
  }

  @HostListener('mouseup') onUp() {
    if (this.cursorType === 'grab' || this.cursorType === 'grabbing') {
      this.cursor.setCursor('grab');
    }
  }
}
