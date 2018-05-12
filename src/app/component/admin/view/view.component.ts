import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../../services/node.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   readCourse: String = "";
  constructor(private nodeService: NodeService, private router: Router) { 
   
    this.nodeService.home().subscribe(
      (result) => {
        console.log(result);
        var jsondata=JSON.parse(result["_body"]);
        console.log(jsondata[0]);
        
        for(var i=0;i<Object.keys(jsondata).length;i++){
          var feed = jsondata[i];
          this.courses.push({coursename:feed.coursename,path:"http://localhost:3000/"+feed.path});
        }    
      },
      (err) => {
        console.log("Error in admin view component",err)
      }
    )
  }

  ngOnInit() {
    
  }
  addContent(){
    this.router.navigate(["/admin-update"]);
  }
  read(coursename){
    
    localStorage.setItem("course_name", coursename);
    this.router.navigate(["/admin-read"]);
  }
  delete(coursename){
    this.nodeService.deleteCourse(coursename).subscribe(
      (result) =>{
        alert(JSON.parse(result["_body"]).message);
        this.courses = [];
        this.load();
      },
      (err) => {
        alert("Error in delete course");
      }
    )
  }
  load(){
    this.nodeService.home().subscribe(
      (result) => {
        console.log(result);
        var jsondata=JSON.parse(result["_body"]);
        console.log(jsondata[0]);
        
        for(var i=0;i<Object.keys(jsondata).length;i++){
          var feed = jsondata[i];
          this.courses.push({coursename:feed.coursename,path:"http://localhost:3000/"+feed.path});
        }    
      },
      (err) => {
        console.log("Error in admin view component",err)
      }
    )
  }
  public courses: COURSES[] = [];
  
}
interface COURSES{
  coursename:String;
  path:String;
}
