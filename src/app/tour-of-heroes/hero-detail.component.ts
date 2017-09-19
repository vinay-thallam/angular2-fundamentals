import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector : 'app-hero-detail',
	template : `
	    <div *ngIf="hero">
	      <h2>{{hero.name}} details!</h2>
	      <div><label>id: </label>{{hero.id}}</div>
	      <div><label>name: </label>
	        <input type="text" placeholder="hero name" 
	        	[(ngModel)]="hero.name">
	      </div>
	    </div>
    `,
	styles : [``]
}) 
export class HeroDetailComponent implements OnInit{

	@Input() hero: Hero;

	ngOnInit() {
	}
}