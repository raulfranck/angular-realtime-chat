import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import {ChatService} from "./services/chat-services/chat.service"

const config: SocketIoConfig = {url: environment.SOCKET_URL_BASE, options: {}}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
