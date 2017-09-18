import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  // encapsulation: ViewEncapsulation.Native, //This config prevents the global css from applying to this component
  selector: 'app-simple-form',
  template: `
    <div>
      <input 
        #myInput 
        type="text" 
        [(ngModel)]="msg" 
        [ngClass]="{mousedown : isMouseDown}"
        (mousedown)="isMouseDown = true"
        (mouseup)="isMouseDown = false"
        (mouseleave)="isMouseDown = false">
      <button 
      class="white bg-black code"
      (click)="update.emit({text:msg})">Click me!</button>
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
  .mousedown{
    border : 2px solid red;
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
