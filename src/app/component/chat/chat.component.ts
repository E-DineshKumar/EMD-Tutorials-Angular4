import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  visible: String="fab";
  message: String;
  username: String;
  messages: any[] = [];
  numUsers: String;
  socketuser: String;
  courses:any[]=[];
  flag : String = "chatroom";
  coursename:String = "Tutorial";
  path:String = "https://thumbs.dreamstime.com/z/webinar-illustration-computer-surrounded-inter-internet-icons-education-online-course-concept-44741409.jpg"
  socket: SocketIOClient.Socket;
  constructor(private nodeService: NodeService) {
    this.username = localStorage.getItem("user")
    this.socket = io.connect(this.nodeService.baseUrl+this.coursename);
    this.nodeService.home().subscribe(
      (result) => {
        var jsondata=JSON.parse(result["_body"]);
        for(var i=0;i<Object.keys(jsondata).length;i++){
          var feed = jsondata[i];
          this.courses.push({coursename:feed.coursename,path:this.nodeService.baseUrl+feed.path});
        }    
      },
      (err) => {
        console.log("Error in chat component",err)
      }
    )
    console.log(this.courses);
    
  }

  ngOnInit() {
    // this.selectChatroom(this.coursename);
  }
  

  selectChatRoom(course,path){
    this.flag = "chat";
    this.path = path;
    this.coursename = course;
    this.socket = io.connect(this.nodeService.baseUrl+course.replace(/ /g, "-"));
    this.socket.on('new message', (msg: any) => {
      // console.log(msg.username);    
      this.messages.push({ "index": "received", username: msg.username, message: msg.message.message });
      //console.log(this.messages);
    });
    this.socket.emit('add user', this.username);

    this.socket.on('user joined', (msg: any) => {
      this.messages.push({ "index": "user_joined", username: msg.username, numUsers: msg.numUsers });
    })
    this.socket.on('user left', (msg: any) => {
      this.messages.push({ "index": "user_left", username: msg.username, numUsers: msg.numUsers });
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
  onClickChatbot() {
    this.visible = "chatroom"
  }
  onClickFab(){
    this.visible = "fab"
  }
  onSendMessage() {
    const message = {
      message: this.message
    };
    this.messages.push({ "index": "sent", username: 'you', message: this.message });
    //console.log(this.messages[0].username);

    this.socket.emit('new message', message);
    this.message = '';
  }

}
