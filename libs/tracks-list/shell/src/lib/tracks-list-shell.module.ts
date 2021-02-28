import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksListUiModule} from '@music-store/tracks-list/ui';


@NgModule({
  imports: [CommonModule, TracksListUiModule],
  exports: [TracksListUiModule]
})
export class TracksListShellModule {}
