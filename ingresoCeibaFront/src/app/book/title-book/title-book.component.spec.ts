import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBookComponent } from './title-book.component';

describe('TitleBookComponent', () => {
  let component: TitleBookComponent;
  let fixture: ComponentFixture<TitleBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
