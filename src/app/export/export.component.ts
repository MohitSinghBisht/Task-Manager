import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  standalone: false,
  templateUrl: './export.component.html',
  styleUrl: './export.component.css'
})
export class ExportComponent {
  features = [
    {
      title: 'Tasks',
      icon: 'pi pi-check-square',
      description: 'Create, manage and track your tasks with ease',
      color: 'var(--primary-color)',
      route: '/tasks'
    },
    {
      title: 'Export',
      icon: 'pi pi-download',
      description: 'Export your tasks and reports in multiple formats',
      color: '#22c55e',
      route: '/export'
    },
    {
      title: 'Analytics',
      icon: 'pi pi-chart-bar',
      description: 'Get insights into your productivity and task completion',
      color: '#6366f1',
      route: '/analytics'
    },
    {
      title: 'Settings',
      icon: 'pi pi-cog',
      description: 'Customize your workspace and preferences',
      color: '#f59e0b',
      route: '/settings'
    }
  ];

  recentActivity = [
    { text: 'Project X deadline updated', time: '10 minutes ago' },
    { text: 'New task assigned to you', time: '1 hour ago' },
    { text: 'Weekly report generated', time: '3 hours ago' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
