import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { DonutComponent } from './donut/donut.component';
import { ScatterComponent } from './scatter/scatter.component';
import { LineComponent } from './line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    DonutComponent,
    ScatterComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
