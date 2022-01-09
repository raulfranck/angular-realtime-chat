import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat-services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.listen('teste event').subscribe((data) => {
      console.log(data)
    })

    this.chatService.emit('messagem', "testeeee")
  }
}
