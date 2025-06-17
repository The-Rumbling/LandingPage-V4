import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-fans-section',
  imports: [
    TranslatePipe
  ],
  templateUrl: './fans-section.html',
  styleUrl: './fans-section.css'
})
export class FansSection {

}
