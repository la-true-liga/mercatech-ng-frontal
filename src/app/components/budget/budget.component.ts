import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent  implements OnInit {
  @Input() public name: string = 'Marujas'

  constructor() { }

  ngOnInit() {}

}
