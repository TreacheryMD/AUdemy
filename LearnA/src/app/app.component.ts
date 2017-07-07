import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  log = [];

  onToggleDetais() {
    this.showDetails = !this.showDetails;
    this.log.push(this.log.length + 1);
  }
}
