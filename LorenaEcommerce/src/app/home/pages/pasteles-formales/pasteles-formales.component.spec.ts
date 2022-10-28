import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelesFormalesComponent } from './pasteles-formales.component';

describe('PastelesFormalesComponent', () => {
  let component: PastelesFormalesComponent;
  let fixture: ComponentFixture<PastelesFormalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastelesFormalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastelesFormalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
