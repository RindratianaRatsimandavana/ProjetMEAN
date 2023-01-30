import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVoitEnGarageComponent } from './liste-voit-en-garage.component';

describe('ListeVoitEnGarageComponent', () => {
  let component: ListeVoitEnGarageComponent;
  let fixture: ComponentFixture<ListeVoitEnGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVoitEnGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVoitEnGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
