import { Component, OnInit } from '@angular/core';
import { NodeService } from "./../../../services/node.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  coursename : String;
  content : String;
  constructor(private nodeService: NodeService) {
    this.coursename = localStorage.getItem("course_name");
    console.log(this.coursename);
    this.nodeService.getSections(this.coursename).subscribe(
      (result) =>{
        console.log(result["_body"]);
        var jsondata=JSON.parse(result["_body"]);
        for(var i=0;i<Object.keys(jsondata).length;i++){
          var feed = jsondata[i];
          this.section.push(feed);
        }
      }
    )
    console.log(1,this.section);
    
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
