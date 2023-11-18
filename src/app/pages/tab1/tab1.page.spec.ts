import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Tab1Page } from './tab1.page'
import { AppTranslatorModule } from 'src/app/app-translator.module'

describe('Tab1Page', () => {
  let component: Tab1Page
  let fixture: ComponentFixture<Tab1Page>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [AppTranslatorModule],
    }).compileComponents()
    fixture = TestBed.createComponent(Tab1Page)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
