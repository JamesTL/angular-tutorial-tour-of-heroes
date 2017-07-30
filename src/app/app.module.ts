import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail-component';


import {AppComponent}  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule],
    //declaration array contains a list of application components,pipes and directives that belong to the module
    declarations: [
        AppComponent,
        HeroDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
