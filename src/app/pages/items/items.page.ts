import { Component, OnInit } from '@angular/core'
import { Category } from 'src/app/interfaces/items/category'
import { Item } from 'src/app/interfaces/items/item'
import { ItemsService } from 'src/app/services/items.service'

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
})
export class ItemsPage implements OnInit {
  public searchQuery: string = '' // Esta propiedad se vinculará con el ion-searchbar

  public items: Array<Item> = []

  public categories: Array<string> = Object.keys(Category).filter(key => isNaN(Number(key)))

  constructor(private readonly itemsService: ItemsService) {}

  public ngOnInit(): void {
    this.itemsService.getItems()
      .subscribe((items: Array<Item>) => {
        this.items = items
      })
  }
  
  public searchQueryChanged(): void {
    // Aquí se puede realizar la búsqueda
  }

  public deleteElement(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1)
    }
  }
}
