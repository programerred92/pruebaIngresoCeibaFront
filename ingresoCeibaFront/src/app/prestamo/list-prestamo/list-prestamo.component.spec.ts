import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrestamoComponent } from './list-prestamo.component';

describe('ListPrestamoComponent', () => {
  let component: ListPrestamoComponent;
  let fixture: ComponentFixture<ListPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
