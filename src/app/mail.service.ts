import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages= [
	  { id: 0, text: "Confirmation mail from xyz.com"},
	  { id: 1, text: "Your ticktes for the Dunkirk are booked"},
	  { id: 2, text: "Bill details for airtel broadband"}
  ]

  update(id, text) {
  	this.messages = this.messages.map(m => m.id === id ? {id, text} : m)
  }

  constructor() { }

}
