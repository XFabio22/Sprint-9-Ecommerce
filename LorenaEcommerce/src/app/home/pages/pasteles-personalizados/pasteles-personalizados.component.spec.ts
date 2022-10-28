import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelesPersonalizadosComponent } from './pasteles-personalizados.component';

describe('PastelesPersonalizadosComponent', () => {
  let component: PastelesPersonalizadosComponent;
  let fixture: ComponentFixture<PastelesPersonalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastelesPersonalizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastelesPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
