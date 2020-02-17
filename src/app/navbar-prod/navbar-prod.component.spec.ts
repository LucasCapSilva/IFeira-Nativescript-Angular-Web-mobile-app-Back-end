import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProdComponent } from '@src/app/navbar-prod/navbar-prod.component';

describe('NavbarProdComponent', () => {
  let component: NavbarProdComponent;
  let fixture: ComponentFixture<NavbarProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
