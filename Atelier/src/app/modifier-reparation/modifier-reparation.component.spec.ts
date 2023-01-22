import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierReparationComponent } from './modifier-reparation.component';

describe('ModifierReparationComponent', () => {
  let component: ModifierReparationComponent;
  let fixture: ComponentFixture<ModifierReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
