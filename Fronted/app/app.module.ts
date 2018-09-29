import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { StartPageModule } from './start-page/start-page.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
    imports: [BrowserModule,HttpModule,AppRoutingModule,StartPageModule,NotFoundModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})


export class AppModule {
}