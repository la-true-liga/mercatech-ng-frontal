import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChipItemComponent } from './chip-item.component'
import { IonicModule } from '@ionic/angular'

@NgModule({
  declarations: [ChipItemComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ChipItemComponent],
})
export class ChipItemModule {}
