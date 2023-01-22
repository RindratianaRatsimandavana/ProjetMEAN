import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureEnregistrerComponent } from './voiture-enregistrer.component';

describe('VoitureEnregistrerComponent', () => {
  let component: VoitureEnregistrerComponent;
  let fixture: ComponentFixture<VoitureEnregistrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureEnregistrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureEnregistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
