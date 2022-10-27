import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYPreciosComponent } from './menu-yprecios.component';

describe('MenuYPreciosComponent', () => {
  let component: MenuYPreciosComponent;
  let fixture: ComponentFixture<MenuYPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuYPreciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuYPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
