import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { TimerComponent } from "./timer.component";


@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        AppComponent,
        TimerComponent    
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}