import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card-component/card.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
})
export class MainModule { }
