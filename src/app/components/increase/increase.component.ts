import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styles: [
  ]
})
export class IncreaseComponent implements OnInit {

  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('value') outValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue(value: number): void {
    if (this.progress >= 100 && value >= 0) {
      this.outValue.emit(100);
      this.progress = 100;

      return;
    }

    if (this.progress <= 0 && value <= 0) {
      this.outValue.emit(0);
      this.progress = 0;

      return
    }

    this.progress += value;
    this.outValue.emit(this.progress);
  }

  onChange(event: number): void {
    if (event >= 100) {
      this.progress = 100;
    } else if (event <= 0) {
      this.progress = 0;
    } else {
      this.progress = event;
    }

    this.outValue.emit(this.progress);
  }

}
