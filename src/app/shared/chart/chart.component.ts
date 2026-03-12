import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() type: ChartType = 'bar';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() backgroundColor: string[] = ['#ff5722', '#4da6ff', '#00cc99', '#ff4d6d', '#ffe066'];

  @Input() options: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#fff' } },
      tooltip: { enabled: true }
    },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    }
  };

  get chartData(): ChartConfiguration<'bar' | 'pie'>['data'] {
    return {
      labels: this.labels,
      datasets: [{ data: this.data, backgroundColor: this.backgroundColor }]
    };
  }
}