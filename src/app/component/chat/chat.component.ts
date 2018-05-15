import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: String;
  username: String;
  messages: any[] = [];
  numUsers : String;
  socketuser : String;
  socket: SocketIOClient.Socket;
  constructor() {
    this.username = localStorage.getItem("user")
    console.log(this.username);
    this.socket = io.connect('http://localhost:3000');
  }

  ngOnInit() {
    this.socket.on('new message', (msg: any) => {
        // console.log(msg.username);    
        this.messages.push({"index":"received",username:msg.username,message:msg.message.message});
      //console.log(this.messages);
    });
    this.socket.emit('add user',this.username);
 
    this.socket.on('user joined',(msg:any)=>{
      this.messages.push({"index":"user_joined",username:msg.username,numUsers:msg.numUsers});
    })
    this.socket.on('user left',(msg:any)=>{
      this.messages.push({"index":"user_left",username:msg.username,numUsers:msg.numUsers});
    })
    this.socket.emit('event1', {
      msg: 'Client to server, can you hear me server?'
    });
    this.socket.on('event2', (data: any) => {
      console.log(data.msg);
      this.socket.emit('event3', {
        msg: 'Yes, its working for me!!'
      });
    });
    this.socket.on('event4', (data: any) => {
      console.log(data.msg);
    });
  }
  onEnter() {
    this.onSendMessage();
}
  onSendMessage() {
    const message = {
      message: this.message
    };
    this.messages.push({"index":"sent",username:'you',message:this.message});
    //console.log(this.messages[0].username);
    
    this.socket.emit('new message', message);
    this.message = '';
  }

}
