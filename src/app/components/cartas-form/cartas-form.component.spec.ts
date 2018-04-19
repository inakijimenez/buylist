import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasFormComponent } from './cartas-form.component';

describe('CartasFormComponent', () => {
  let component: CartasFormComponent;
  let fixture: ComponentFixture<CartasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
