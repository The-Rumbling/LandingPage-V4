import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-artist-section',
  imports: [
    TranslatePipe
  ],
  templateUrl: './artist-section.html',
  styleUrl: './artist-section.css'
})
export class ArtistSection {

}
