import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages= [
	  "Confirmation mail from xyz.com",
	  "Your ticktes for the Dunkirk are booked",
	  "Bill details for airtel broadband"
  ]

  constructor() { }

}
