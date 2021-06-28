import { Component } from '@angular/core';



@Component({
  selector: 'app-graph-one',
  templateUrl: './graph-one.component.html',
  styles: [
  ]
})
export class GraphOneComponent {

  public purchaseLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ]
  public purchaseData: number[][] = [ [ 15, 20, 65 ] ];

}

