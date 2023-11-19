import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { AppTranslatorModule } from './app-translator.module'

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AppTranslatorModule],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent)
    const app: AppComponent = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})
