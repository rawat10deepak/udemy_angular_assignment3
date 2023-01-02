import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPara = false;
  count = 0;
  logs = [];

  onButtonClick() {
    this.showPara = !this.showPara;
    this.count++;
    this.logs.push(this.count);
  }
}
