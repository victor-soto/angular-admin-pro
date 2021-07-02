import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
	{ title: 'Main', url: '/' },
	{ title: 'Graphics', url: 'graph-one' },
	{ title: 'ProgressBar', url: 'progress' },
	{ title: 'Promises', url: 'promises' },
	{ title: 'rxjs', url: 'rxjs' },
      ]
    }
  ];

  constructor() { }
}
