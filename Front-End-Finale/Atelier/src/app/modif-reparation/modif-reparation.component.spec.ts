import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifReparationComponent } from './modif-reparation.component';

describe('ModifReparationComponent', () => {
  let component: ModifReparationComponent;
  let fixture: ComponentFixture<ModifReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
