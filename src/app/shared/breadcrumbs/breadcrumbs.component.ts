import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string = 'AdminPro';
  public routerParams$: Subscription;

  constructor(private router: Router) {
    this.routerParams$ = this.configureRouterParams()
      .subscribe(({ title }) => {
	this.title = title;
	document.title = `AdminPro - ${title}`;
      });
  }

  ngOnDestroy(): void {
    this.routerParams$.unsubscribe();
  }

  configureRouterParams() {
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

}
