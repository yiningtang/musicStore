import { async, TestBed } from '@angular/core/testing';
import { TracksListDataAccessModule } from './tracks-list-data-access.module';

describe('TracksListDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TracksListDataAccessModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TracksListDataAccessModule).toBeDefined();
  });
});
