import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAnimalComponent } from './datos-animal.component';

describe('DatosAnimalComponent', () => {
  let component: DatosAnimalComponent;
  let fixture: ComponentFixture<DatosAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosAnimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
