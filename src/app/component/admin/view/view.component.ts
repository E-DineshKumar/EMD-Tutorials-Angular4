import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../../services/node.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  courses:COURSES;
  constructor(private nodeService: NodeService, private router: Router) { }

  ngOnInit() {
    this.nodeService.home().subscribe(
      (result) => {
        console.log(result);
        this.courses= JSON.parse(result["_body"]);
      },
      (err) => {
        console.log("Error in admin view component",err)
      }
    )
  }
}
interface COURSES{
  coursename:String;
  path:String;
}
