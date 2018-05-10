import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouter }  from './app.routing';

import { AppComponent }  from './components/app.component';
import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { UserInfoComponent }  from './components/user-info/user-info.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRouter ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, UserInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
