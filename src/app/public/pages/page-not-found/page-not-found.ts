import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-page-not-found',
  imports: [
    MatButton
  ],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {
  currentPath: string;

  constructor(private router: Router) {
    this.currentPath = this.router.url;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
