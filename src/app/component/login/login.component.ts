import { Component, OnInit } from '@angular/core';
import { NodeService } from './../../services/node.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password : String;
  constructor(private nodeService : NodeService,private router : Router) { }

  ngOnInit() {

  }
  onLogin(){
    if(this.email != undefined && this.password != undefined){
      this.nodeService.login(this.email,this.password).subscribe(
        (result)=>{
          console.log(result);
          if(JSON.parse(result["_body"]).message =="loggedin")
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      )
    }else{
      alert("Please fill all details");
    }
  }
}
