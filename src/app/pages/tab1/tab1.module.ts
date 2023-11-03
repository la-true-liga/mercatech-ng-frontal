import { BudgetModule } from '../../components/budget/budget.module'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { Tab1Page } from './tab1.page'
import { Tab1PageRoutingModule } from './tab1-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    BudgetModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
