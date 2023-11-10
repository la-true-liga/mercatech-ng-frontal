import { Component } from '@angular/core'
import { Category } from 'src/app/interfaces/items/category'

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
})
export class ItemsPage {
  public searchQuery: string = '' // Esta propiedad se vinculará con el ion-searchbar

  public elements: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3']

  public categories: Array<string> = Object.keys(Category).filter(key => isNaN(Number(key)))
  
  public searchQueryChanged(): void {
    // Aquí se puede realizar la búsqueda
  }

  public deleteElement(index: number): void {
    if (index >= 0 && index < this.elements.length) {
      this.elements.splice(index, 1)
    }
  }
}
