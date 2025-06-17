import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FooterSection} from './public/pages/footer-section/footer-section';
import {LanguageSwitcher} from './public/pages/language-switcher/language-switcher';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterSection, LanguageSwitcher, TranslatePipe, RouterLink, RouterLinkActive, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'landing-open';

  items=[
    {link: 'home', label: 'inicio'},
    {link: 'fans', label: 'fans'},
    {link: 'artists', label: 'artistas'},
  ]
}
