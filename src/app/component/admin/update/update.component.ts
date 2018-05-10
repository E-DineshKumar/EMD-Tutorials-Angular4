import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { NodeService } from './../../../services/node.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  course_id:String;
  course_name:String;
  section:String;
  content:String;
  constructor(public nodeService: NodeService,private router: Router) { }

  ngOnInit() {
  }
  onUpload(){
    this.nodeService.updateCourse(this.course_id,this.course_name,this.section,this.content).subscribe(
      (result)=>{
        alert(JSON.parse(result["_body"]).message)
        this.section="";
        this.content="";
      },
      (err) =>{
        console.log("Error in admin update component",err);
        
      }
    )
  }

}
