import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDepotComponent } from './demande-depot.component';

describe('DemandeDepotComponent', () => {
  let component: DemandeDepotComponent;
  let fixture: ComponentFixture<DemandeDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
