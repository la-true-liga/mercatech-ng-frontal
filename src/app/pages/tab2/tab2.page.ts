import { Component } from '@angular/core'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public searchQuery: string = ''; // Esta propiedad se vinculará con el ion-searchbar

  public elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  
  public searchQueryChanged(): void {
    // Aquí se puede realizar la búsqueda
  }

  public borrarElemento(index: number) {
    if (index >= 0 && index < this.elementos.length) {
      this.elementos.splice(index, 1);
    }
  }

}
