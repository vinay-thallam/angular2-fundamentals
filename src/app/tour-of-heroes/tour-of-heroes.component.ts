import { Component, OnInit } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-tour-of-heroes',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>
      <input type="text" placeholder="hero name" [(ngModel)]="hero.name">
    </div>
  `,
  styles: [`    
    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }
  `]
})
export class TourOfHeroesComponent implements OnInit {

  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
