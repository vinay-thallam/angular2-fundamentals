import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{msg}}
      <input #myInput type="text">
      <button (mouseover)="onClick($event, myInput.value)">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() msg;

  constructor() { }

  onClick(event, text) {
    console.log(event)
    console.log(text)
  }
  ngOnInit() {
  }

}
