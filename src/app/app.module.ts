import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main.component';
import { CardComponent } from './Components/card-component/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
