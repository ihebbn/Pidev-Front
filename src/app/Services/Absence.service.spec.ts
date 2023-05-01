import {AbsenceService} from "./Absence.service";
import {TestBed} from "@angular/core/testing";

describe('PostService', () => {
  let service: AbsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
