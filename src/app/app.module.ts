import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { Mensagem1Component } from './mensagem1/mensagem1.component';

@NgModule({
  declarations: [
    AppComponent,
    MensagemComponent,
    Mensagem1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
