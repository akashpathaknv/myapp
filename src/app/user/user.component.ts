import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface userInterface {
  a: string;
  b: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {
    this.user = {} as userInterface;
  }

  @Input() user: userInterface;

  @Input() myName: string | undefined;
  @Output() output: EventEmitter<userInterface> =
    new EventEmitter<userInterface>();
  outputString = 'This is child component value';
  ngOnInit(): void {}

  sendUser(): void {
    this.output.emit(this.user);
  }
}
