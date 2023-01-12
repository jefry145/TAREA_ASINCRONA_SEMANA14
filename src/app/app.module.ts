
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/page.module';
import { AppRoutingModule } from './routingmodule';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
