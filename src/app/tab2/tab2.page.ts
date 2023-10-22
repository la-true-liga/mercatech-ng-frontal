import { Component } from '@angular/core'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchQuery: string = ''; // Esta propiedad se vinculará con el ion-searchbar

  searchQueryChanged() {
    console.log('Nuevo valor de searchQuery:', this.searchQuery);
    // Puedes realizar acciones en función del valor de searchQuery aquí
  }

  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  borrarElemento(index: number) {
    if (index >= 0 && index < this.elementos.length) {
      this.elementos.splice(index, 1);
    }
  }

}
