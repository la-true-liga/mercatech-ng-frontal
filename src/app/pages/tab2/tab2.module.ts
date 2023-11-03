import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { Tab2Page } from './tab2.page'
import { Tab2PageRoutingModule } from './tab2-routing.module'
import { ChipItemModule } from '../../components/chip-item/chip-item.module'
import { ListItemModule } from '../../components/list-item/list-item.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ChipItemModule,
    ListItemModule,
  ],
  declarations: [
    Tab2Page,
  ]
})
export class Tab2PageModule {}
