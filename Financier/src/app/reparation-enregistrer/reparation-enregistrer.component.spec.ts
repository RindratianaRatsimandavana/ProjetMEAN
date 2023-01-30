import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationEnregistrerComponent } from './reparation-enregistrer.component';

describe('ReparationEnregistrerComponent', () => {
  let component: ReparationEnregistrerComponent;
  let fixture: ComponentFixture<ReparationEnregistrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationEnregistrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationEnregistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
