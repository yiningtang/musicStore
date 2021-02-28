import { async, TestBed } from '@angular/core/testing';
import { TracksListFeatureModule } from './tracks-list-feature.module';

describe('TracksListFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TracksListFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TracksListFeatureModule).toBeDefined();
  });
});
