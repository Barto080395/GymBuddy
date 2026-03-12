
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CursorDirective } from '../../global/cursor/cursor.directive';

export interface ISkill {
  name: string;
  percent: number;
  icon?: string;
}

@Component({
  selector: 'app-circular-skill-chart',
  standalone: true,
  imports: [CursorDirective],
  templateUrl: './circular-skill-chart.html',
  styleUrls: ['./circular-skill-chart.scss']
})
export class CircularSkillChartComponent implements OnInit {
  @Input() skill!: ISkill;
  @Input() animated = false;
  @Input() icon?: string;
  @Input() deletable = false;
  @Output() onDelete = new EventEmitter<string>();

  radius = 40;
  circumference = 2 * Math.PI * this.radius;
  offset!: number;
  color!: string;

  GOLD_COLOR = '#ff8a00';
  LIGHT_YELLOW = '#ffe066';

  ngOnInit(): void {
    this.color = this.skill.percent < 75 ? this.LIGHT_YELLOW : this.GOLD_COLOR;
    this.offset = this.animated ? this.circumference - (this.skill.percent / 100) * this.circumference : this.circumference;
  }

  handleDelete() {
    this.onDelete.emit(this.skill.name);
  }
}
