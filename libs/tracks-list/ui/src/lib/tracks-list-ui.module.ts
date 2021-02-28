import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksListComponent } from './tracks-list/tracks-list.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { selectFeatureTrackList, TrackListFeatureState, trackListReducer } from '@music-store/tracks-list/data-access'
const routes: Routes = [
  {
    path: '',
    component: TracksListComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatTableModule, StoreModule.forFeature('trackList', trackListReducer)],
  declarations: [TracksListComponent],
  exports : [TracksListComponent]
})
export class TracksListUiModule {}

