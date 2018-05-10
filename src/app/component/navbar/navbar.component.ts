import { Component, OnInit } from '@angular/core';
import { NodeService } from './../../services/node.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private nodeService: NodeService,private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.nodeService.logout().subscribe(
      (result)=>{
        console.log(result);
        //if(JSON.parse(result["_body"]).message=="logout")
        this.router.navigate(['/login']);      
      },
      (err) =>{
        console.log("Error in logout",err);
      }
    )
  }
}
