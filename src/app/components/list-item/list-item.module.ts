import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListItemComponent } from './list-item.component'
import { IonicModule } from '@ionic/angular'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ],
  exports: [
    ListItemComponent,
  ],
})
export class ListItemModule { }
