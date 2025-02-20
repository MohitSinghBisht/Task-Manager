import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features = [
    {
      title: 'Tasks',
      icon: 'pi pi-check-square',
      description: 'Create, organize, and track your tasks with powerful filters and priority management',
      color: '#3B82F6', // Blue
      route: '/tasks',
      badge: 'Core'
    },
    {
      title: 'Export',
      icon: 'pi pi-download',
      description: 'Export your data in multiple formats including PDF, Excel, and CSV with custom templates',
      color: '#10B981', // Green
      route: '/export',
      badge: 'Pro'
    },
    {
      title: 'Analytics',
      icon: 'pi pi-chart-line',
      description: 'Visualize productivity trends with interactive charts and custom reporting dashboards',
      color: '#8B5CF6', // Purple
      route: '/analytics',
      badge: 'Pro'
    },
    {
      title: 'Settings',
      icon: 'pi pi-cog',
      description: 'Customize your workspace, notification preferences, and integration settings',
      color: '#F59E0B', // Amber
      route: '/settings',
      badge: null
    }
  ];

  upcomingTasks = [
    { title: 'Website redesign project', dueDate: '2025-02-22', priority: 'high' },
    { title: 'Team meeting preparation', dueDate: '2025-02-20', priority: 'medium' },
    { title: 'Review project proposals', dueDate: '2025-02-25', priority: 'low' }
  ];

  taskMetrics = {
    tasksCompleted: 42,
    tasksInProgress: 14,
    upcomingDeadlines: 6,
    productivityScore: 87
  };

  quickActions = [
    { icon: 'pi pi-plus', label: 'New Task', color: '#3B82F6' },
    { icon: 'pi pi-calendar-plus', label: 'Schedule', color: '#8B5CF6' },
    { icon: 'pi pi-bell', label: 'Reminders', color: '#F59E0B' },
    { icon: 'pi pi-file-pdf', label: 'Reports', color: '#10B981' }
  ];

  constructor() { }

  ngOnInit(): void { }

  getPriorityClass(priority: string): string {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  }
}