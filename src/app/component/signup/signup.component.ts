import { Component, OnInit } from '@angular/core';
import { NodeService } from './../../services/node.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name : String;
  email: String;
  password : String;
  c_password : String;
  mobile : number;
  constructor(private nodeService : NodeService,private router : Router) { }

  ngOnInit() {
  }

  onSignup(){

    if(this.name.length !=0 && this.email.length != 0 && this.password.length != 0 && this.c_password.length != 0 && this.mobile.toString().length <= 9){
      if(this.password === this.c_password){
        this.nodeService.signup(this.name,this.email,this.password,this.mobile).subscribe(
          (result)=>{
            console.log(result);
            if(JSON.parse(result["_body"]).message =="signedup")
            this.router.navigate(['/login']);
          },
          (err) => {
            alert(err);
          }
        )
      }else{
        alert("Please enter same password");
      }
    }else{
      alert("Please fill all details");
    }
  }

}
