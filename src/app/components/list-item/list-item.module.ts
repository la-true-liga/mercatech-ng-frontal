import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListItemComponent } from './list-item.component'
import { IonicModule } from '@ionic/angular'

@NgModule({
  declarations: [
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ListItemComponent,
  ],
})
export class ListItemModule { }
