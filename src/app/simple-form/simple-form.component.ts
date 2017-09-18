import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{msg}}
      <input #myInput type="text" [(ngModel)]="msg">
      <button (click)="update.emit({text:msg})">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() msg;
  @Output() update = new EventEmitter();

  constructor() { 
    // setInterval(() => this.msg = Math.random().toString(), 2000);
  }

  ngOnInit() {
  }

}
