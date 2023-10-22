import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const MAX_VALUE = 100;
const MIN_VALUE = 1;

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})


export class ListItemComponent  implements OnInit {

  counter: number = 1;

  @Input()
  itemText!: string;
  @Output() deleteItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onDeleteClick() {
    // Emitir un evento para notificar al componente padre que se debe borrar este elemento
    this.deleteItem.emit();
  }

  increment() {
    if (this.counter < MAX_VALUE) {
      this.counter++;
    }
  }

  decrement() {
    if (this.counter > MIN_VALUE) {
      this.counter--;
    }
    /* Posible funcionalidad
     else {
      this.onDeleteClick();
    }
    */

  }

}
