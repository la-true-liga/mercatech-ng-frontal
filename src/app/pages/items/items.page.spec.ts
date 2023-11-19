import { ComponentFixture, TestBed } from '@angular/core/testing'


import { ItemsPage } from './items.page'
import { AppTranslatorModule } from 'src/app/app-translator.module'
import { IonicModule } from '@ionic/angular'

describe('ItemsPage', () => {
  let component: ItemsPage
  let fixture: ComponentFixture<ItemsPage>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsPage],
      imports: [IonicModule.forRoot(), AppTranslatorModule]
    }).compileComponents()

    fixture = TestBed.createComponent(ItemsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
