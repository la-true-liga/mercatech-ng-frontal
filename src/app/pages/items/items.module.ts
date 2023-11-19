import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { ItemsPage } from './items.page'
import { ItemsPageRoutingModule } from './items-routing.module'
import { ChipItemModule } from '../../components/chip-item/chip-item.module'
import { ListItemModule } from '../../components/list-item/list-item.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    ItemsPageRoutingModule,
    ChipItemModule,
    ListItemModule,
  ],
  declarations: [
    ItemsPage,
  ]
})
export class ItemsPageModule {}
