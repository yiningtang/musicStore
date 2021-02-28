import { async, TestBed } from '@angular/core/testing';
import { TracksListShellModule } from './tracks-list-shell.module';

describe('TracksListShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TracksListShellModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TracksListShellModule).toBeDefined();
  });
});
