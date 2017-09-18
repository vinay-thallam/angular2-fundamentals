import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{msg}}
      <input #myInput type="text" [(ngModel)]="msg">
      <button (mouseover)="onClick($event, myInput.value)">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() msg;

  constructor() { 
    setInterval(() => this.msg = Math.random().toString(), 2000);
  }

  onClick(event, text) {
    console.log(event)
    console.log(text)
  }
  ngOnInit() {
  }

}
