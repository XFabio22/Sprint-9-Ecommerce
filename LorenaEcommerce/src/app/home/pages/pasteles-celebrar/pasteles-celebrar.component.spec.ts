import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelesCelebrarComponent } from './pasteles-celebrar.component';

describe('PastelesCelebrarComponent', () => {
  let component: PastelesCelebrarComponent;
  let fixture: ComponentFixture<PastelesCelebrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastelesCelebrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastelesCelebrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
