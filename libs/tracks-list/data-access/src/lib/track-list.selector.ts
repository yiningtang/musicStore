import { createSelector } from '@ngrx/store';
import { TrackList } from './store';
import { State } from'apps/music-store/src/app/app.module';


export interface TrackListFeatureState {
  trackList: TrackList[];
}

export interface FeatureState extends State {
    trackList: TrackListFeatureState;
}
export const selectFeature = (state: FeatureState) => state.trackList;

export const selectFeatureTrackList = createSelector(
    selectFeature,
    (state: TrackListFeatureState) => state.trackList
  );