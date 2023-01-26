import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeDepotComponent } from './liste-demande-depot.component';

describe('ListeDemandeDepotComponent', () => {
  let component: ListeDemandeDepotComponent;
  let fixture: ComponentFixture<ListeDemandeDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDemandeDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
