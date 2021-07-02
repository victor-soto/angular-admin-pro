import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {
    
    this.observableOfNumbers().pipe(
      retry()
    ).subscribe(
      value => console.log('Subs: ' + value),
      error => console.warn('Error: ' + error),
      () => console.info('End Obs')
    );
  }

  observableOfNumbers(): Observable<number> {
    let i = -1;

    return new Observable(observer => {
      const interval = setInterval(() => {
	i++;
	observer.next(i);

	if (i === 4) {
	  clearInterval(interval);
	  observer.complete();
	}

	if (i === 2) {
	  console.log('i = 2');
	  observer.error('Current value is 2');
	}

      }, 1000);
    });
  }

}
