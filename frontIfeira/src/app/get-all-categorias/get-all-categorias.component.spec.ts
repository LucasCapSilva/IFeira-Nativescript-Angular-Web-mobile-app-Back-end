import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCategoriasComponent } from '@src/app/get-all-categorias/get-all-categorias.component';

describe('GetAllCategoriasComponent', () => {
  let component: GetAllCategoriasComponent;
  let fixture: ComponentFixture<GetAllCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
