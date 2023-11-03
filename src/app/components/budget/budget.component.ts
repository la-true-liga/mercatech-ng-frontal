import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-budget',
  template: `
    <p>
      <img src="../../../assets/icon/favicon.png" alt="" height="30px" width="30px">
      <span>{{name}}</span>
    </p>
  `
})
export class BudgetComponent {
  @Input() public name: string = 'Marujas'
}