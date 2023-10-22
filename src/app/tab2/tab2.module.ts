import { ChipItemComponent } from '../chip-item/chip-item.component'
import { CommonModule } from '@angular/common'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { ListItemComponent } from '../list-item/list-item.component'
import { NgModule } from '@angular/core'
import { Tab2Page } from './tab2.page'
import { Tab2PageRoutingModule } from './tab2-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, ChipItemComponent, ListItemComponent]
})
export class Tab2PageModule {}
