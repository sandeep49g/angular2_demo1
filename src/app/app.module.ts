import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './components/app.component';
import { UserInfoComponent }  from './components/user-info/user-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
