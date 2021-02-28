
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, TrackListState } from './store';
import *  as TrackListActions from './track-list.actions';

const ELEMENT_DATA = [
    {trackId: '1', trackName: 'test1'},
    {trackId: '2', trackName: 'test2'}
  ];

const scoreboardReducer = createReducer(
    initialState,
    on(TrackListActions.loadTracks, (state) => 
    ({state, ...{trackList: ELEMENT_DATA}})
    )
  );
  
  export function trackListReducer(state: TrackListState, action: Action) {
    return scoreboardReducer(state, action);
  }