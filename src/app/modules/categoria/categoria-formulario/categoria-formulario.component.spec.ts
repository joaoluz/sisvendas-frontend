import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCreateComponent } from './categoria-formulario.component';

describe('CategoriaCreateComponent', () => {
  let component: CategoriaCreateComponent;
  let fixture: ComponentFixture<CategoriaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
