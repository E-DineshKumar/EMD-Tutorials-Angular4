import { Component, OnInit ,Input} from '@angular/core';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-chatrooms',
  templateUrl: './chatrooms.component.html',
  styleUrls: ['./chatrooms.component.css']
})
export class ChatroomsComponent implements OnInit {
  courses:any[]=[];
  constructor(private nodeService: NodeService) { 
    this.nodeService.home().subscribe(
      (result) => {
        var jsondata=JSON.parse(result["_body"]);
        for(var i=0;i<Object.keys(jsondata).length;i++){
          var feed = jsondata[i];
          this.courses.push({coursename:feed.coursename,path:"http://localhost:3000/"+feed.path});
        }    
      },
      (err) => {
        console.log("Error in admin view component",err)
      }
    )
    console.log(this.courses);
    
  }

  ngOnInit() {
  }
  selectChatRoom(coursename){
    console.log("chatroom course",coursename);
    
  }

}
