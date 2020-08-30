import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFinderService } from './profile-finder.service'
import { HttpClientModule } from '@angular/common/http'
import {  ReposComponent } from './repos/repos.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ProfileFinderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
