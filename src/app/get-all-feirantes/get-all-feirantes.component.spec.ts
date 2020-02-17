import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFeirantesComponent } from '@src/app/get-all-feirantes/get-all-feirantes.component';

describe('GetAllFeirantesComponent', () => {
  let component: GetAllFeirantesComponent;
  let fixture: ComponentFixture<GetAllFeirantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllFeirantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllFeirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
