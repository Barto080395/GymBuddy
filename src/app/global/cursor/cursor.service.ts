import { Injectable, signal } from '@angular/core';

export type CursorType = 'default' | 'pointer' | 'grab' | 'grabbing';

@Injectable({ providedIn: 'root' })
export class CursorService {
  // stato globale
  private _cursor = signal<CursorType>('default');

  // lettura del cursore
  cursor = this._cursor.asReadonly();

  // cambio cursore
  setCursor(type: CursorType, element?: HTMLElement) {
    this._cursor.set(type);
    (element || document.body).style.cursor = type;
  }
  
  reset(element?: HTMLElement) {
    (element || document.body).style.cursor = 'default';
  }
  
}
