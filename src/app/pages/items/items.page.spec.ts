import { ComponentFixture, TestBed } from '@angular/core/testing'

// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'

import { ItemsPage } from './items.page'

describe('Tab2Page', () => {
  let component: ItemsPage
  let fixture: ComponentFixture<ItemsPage>

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [Tab2Page],
    //   imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    // }).compileComponents()

    fixture = TestBed.createComponent(ItemsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
