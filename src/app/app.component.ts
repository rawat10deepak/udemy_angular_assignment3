import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPara = false;
  logs = [];

  onButtonClick() {
    this.showPara = !this.showPara;
    this.logs.push(new Date());
  }
}
