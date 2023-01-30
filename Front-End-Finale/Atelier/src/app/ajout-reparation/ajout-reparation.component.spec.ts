import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutReparationComponent } from './ajout-reparation.component';

describe('AjoutReparationComponent', () => {
  let component: AjoutReparationComponent;
  let fixture: ComponentFixture<AjoutReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
