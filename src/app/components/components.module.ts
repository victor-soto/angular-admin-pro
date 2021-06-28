import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { IncreaseComponent } from './increase/increase.component';
import { DonutComponent } from './donut/donut.component';


@NgModule({
  declarations: [
    IncreaseComponent,
    DonutComponent
  ],
  exports: [
    IncreaseComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ]
})
export class ComponentsModule { }
