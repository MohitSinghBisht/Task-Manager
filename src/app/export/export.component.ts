import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  standalone: false,
  templateUrl: './export.component.html',
  styleUrl: './export.component.css'
})
export class ExportComponent {
  recentActivities;
  productivityValue;
  taskData;
  chartOptions;
}
