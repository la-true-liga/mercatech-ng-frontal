import { BudgetComponent } from './budget.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BudgetComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BudgetComponent,
  ],
})
export class BudgetModule { }
