import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent {
  @Input() title!: string;
  @Input() desc!: string;
  @Input() link!: string;
}
