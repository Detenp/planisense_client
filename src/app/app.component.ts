import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Planisense Client';
  byGenre: Boolean = true;

  changeByGenre() {
    this.byGenre = !this.byGenre;
  }
}
