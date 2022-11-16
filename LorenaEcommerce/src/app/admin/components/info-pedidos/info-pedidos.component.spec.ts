import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPedidosComponent } from './info-pedidos.component';

describe('InfoPedidosComponent', () => {
  let component: InfoPedidosComponent;
  let fixture: ComponentFixture<InfoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
