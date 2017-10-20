import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


import {VkService} from './vk.service';
import {JsonpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    JsonpModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [VkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
