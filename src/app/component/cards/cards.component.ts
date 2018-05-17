import { Component, OnInit, Input } from '@angular/core';
import { NodeService } from '../../services/node.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  flag : boolean;
  @Input("test") test : string;
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
    this.flag=true;
  }
  read(coursename){
    
    localStorage.setItem("course", coursename);
    this.router.navigate(["/read-course"]);
  }
  public courses: COURSES[] = [];
}

interface COURSES{
  coursename:String;
  path:String;
}