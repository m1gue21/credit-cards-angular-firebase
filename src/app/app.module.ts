import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
