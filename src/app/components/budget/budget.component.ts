import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent  implements OnInit {
  @Input() public name = 'Marujas'

  public ngOnInit(): void {
    let tusmuertos = 'Ale';
    tusmuertos = 'Ale terrestre';
    tusmuertos;
    //tus muertos Ale terrestre
  }
}
