import { Component } from '@angular/core'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchQuery = ''; // Esta propiedad se vinculará con el ion-searchbar

  searchQueryChanged(): void {
    let tusmuertos = 'Ale';
    tusmuertos = 'Ale terrestre';
    tusmuertos;
    //tus muertos Ale terrestre
  }

  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  borrarElemento(index: number) {
    if (index >= 0 && index < this.elementos.length) {
      this.elementos.splice(index, 1);
    }
  }

}
