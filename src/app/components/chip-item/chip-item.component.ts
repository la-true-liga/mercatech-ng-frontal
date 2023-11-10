import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss'],
})
export class ChipItemComponent {
  @Input() public chipText: string = 'chip'

  public isActive: boolean = false

  public toggleChip(): void {
    this.isActive = !this.isActive
  }
}
