export interface TrackListState {
    trackList: TrackList[]
}
export interface TrackList {
   trackId: string;
   trackName: string;
  }

export const initialState: TrackListState = {
    trackList: [{trackId: '', trackName: ''}]
}