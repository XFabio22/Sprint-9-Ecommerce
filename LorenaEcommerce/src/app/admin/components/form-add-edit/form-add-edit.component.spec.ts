import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEditComponent } from './form-add-edit.component';

describe('FormEditComponent', () => {
  let component: FormAddEditComponent;
  let fixture: ComponentFixture<FormAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
