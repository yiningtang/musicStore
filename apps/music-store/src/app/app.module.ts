import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { StoreModule } from '@ngrx/store';
import { trackListReducer } from '@music-store/tracks-list/data-access'

export interface State {}
const AppState: State = {}

const routes: Routes = [
{
  path: '',
  loadChildren: () => import('@musicStore/tracks-list').then(trackList => trackList.TracksListShellModule)
}
]; 
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), NoopAnimationsModule, StoreModule.forRoot(AppState)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
