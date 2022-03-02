import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello world how are you all ?';
  jsonValue = {
    a: 'Akash',
    b: 'Pathak',
  };

  name = 'This is parent string';

  newDate = new Date();

  GetData(value: any) {
    console.log(value);
  }

  constructor(private httpService: HttpService) {}
  handleEvent() {
    this.httpService
      .getRequest('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => (this.jsonValue = response));
  }
}
