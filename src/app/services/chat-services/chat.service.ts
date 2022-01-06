import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

interface Message {
  id: string;
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(message: Message) {
    this.socket.emit('new-message', message)
  }

  getMessages() {
    return Observable.create((observer: any) => {
      this.socket.on('new-message', (message: any) => {
        observer.next(message)
      })
    })
  }
}
