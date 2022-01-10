import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {io} from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: any;
  readonly uri: string = "ws://localhost:3000";

  constructor() {
    this.socket = io(this.uri);
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data)
  }
}
