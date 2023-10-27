import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss'],
})
export class ChipItemComponent  implements OnInit {
  @Input() public chipText = 'chip';
  public isActive = false;


  public ngOnInit(): void {
    let tusmuertos = 'Ale';
    tusmuertos = 'Ale terrestre';
    tusmuertos;
    //tus muertos Ale terrestre
  }

  public toggleChip(): void {
    this.isActive = !this.isActive;
  }
}
