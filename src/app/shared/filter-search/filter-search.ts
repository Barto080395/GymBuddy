import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-search.html',
  styleUrls: ['./filter-search.scss']
})
export class FilterSearchComponent {
  @Input() searchInput: string = '';
  @Output() searchInputChange = new EventEmitter<string>();

  isFocused: boolean = false;

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchInputChange.emit(target.value);
  }
}
