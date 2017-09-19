import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    TourOfHeroesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ { provide:'mail', useClass:MailService}, { provide:'api', useValue:'http://localhost:3000'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
