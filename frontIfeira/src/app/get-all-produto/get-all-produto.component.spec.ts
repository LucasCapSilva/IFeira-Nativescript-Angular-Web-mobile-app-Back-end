import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProdutoComponent } from '@src/app/get-all-produto/get-all-produto.component';

describe('GetAllProdutoComponent', () => {
  let component: GetAllProdutoComponent;
  let fixture: ComponentFixture<GetAllProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
