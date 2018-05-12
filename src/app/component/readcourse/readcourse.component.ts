import { Component, OnInit } from '@angular/core';
import { NodeService } from "./../../services/node.service";


@Component({
  selector: 'app-readcourse',
  templateUrl: './readcourse.component.html',
  styleUrls: ['./readcourse.component.css']
})
export class ReadcourseComponent implements OnInit {
  coursename : String;
  content : String;
  
  constructor(private nodeService: NodeService) {
    this.coursename = localStorage.getItem("course");
    console.log(this.coursename);
    this.nodeService.getSections(this.coursename).subscribe(
      (result) =>{
        console.log(result["_body"]);
        var jsondata=JSON.parse(result["_body"]);
        for(var i=0;i<Object.keys(jsondata).length;i++){
          var feed = jsondata[i];
          this.section.push(feed);
        }
        this.getCourseData(this.section[0]);
      }
    )
    
  }


  ngOnInit() {
  }
  getCourseData(sec){
    this.nodeService.getSectionData(this.coursename,sec).subscribe(
      (result) =>{
        console.log(result["_body"]);
        this.content= JSON.parse(result["_body"]).data;
      },

      (err) =>{
        console.log("error in read component");
        
      }
    )
  }
  public section:String[] = [];
}
