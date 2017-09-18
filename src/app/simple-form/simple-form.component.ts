import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="msg">
      <button (click)="update.emit({text:msg})">Click me!</button>
    </div>
  `,
  styles: [`
  :host{
    display: flex;
    flex-direction: column;
  } 
  *{
    font-family : monospace;
  }
  input:focus{
    font-weight : bold;
  }
  button{
    border : none
  }
  `]
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
