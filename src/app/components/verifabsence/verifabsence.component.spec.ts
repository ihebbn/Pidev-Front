import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifabsenceComponent } from './verifabsence.component';

describe('VerifabsenceComponent', () => {
  let component: VerifabsenceComponent;
  let fixture: ComponentFixture<VerifabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
