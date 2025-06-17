import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-footer-section',
  imports: [
    TranslatePipe
  ],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css'
})
export class FooterSection {

}
