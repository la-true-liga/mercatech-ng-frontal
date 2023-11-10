import { Component, EventEmitter, Input, Output } from '@angular/core'

const MAX_VALUE: number = 100
const MIN_VALUE: number = 1

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})

export class ListItemComponent {
  @Input() public itemText!: string

  public counter: number = 1

  @Output() public deleteItem: EventEmitter<void> = new EventEmitter<void>()


  public onDeleteClick() {
    // Emitir un evento para notificar al componente padre que se debe borrar este elemento
    this.deleteItem.emit()
  }

  public increment() {
    if (this.counter < MAX_VALUE) {
      this.counter++
    }
  }

  public decrement() {
    if (this.counter > MIN_VALUE) {
      this.counter--
    }
    /* Posible funcionalidad
     else {
      this.onDeleteClick();
    }
    */
  }
}
