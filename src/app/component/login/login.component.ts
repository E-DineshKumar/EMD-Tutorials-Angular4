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
  password: String;
  constructor(private nodeService: NodeService, private router: Router) {
    this.nodeService.session().subscribe((result) => {
      if (JSON.parse(result["_body"]).message == "loggedin")
      if (JSON.parse(result["_body"]).username != "admin") {
        localStorage.setItem("user", JSON.parse(result["_body"]).username)
        this.router.navigate(['/home']);
      }
      else {
        localStorage.setItem("user", JSON.parse(result["_body"]).username)
        this.router.navigate(['/admin-allcourses']);
      }
    },
      err => {
        console.log("err", err)
      })
  }

  ngOnInit() {

  }
  onLogin() {
    console.log(typeof this.email);
    
    if (this.email.length != 0 && this.password.length != 0) {
      this.nodeService.login(this.email, this.password).subscribe(
        (result) => {
          console.log(result);
          if (JSON.parse(result["_body"]).message == "loggedin") {
            if (JSON.parse(result["_body"]).username != "admin") {
              localStorage.setItem("user", JSON.parse(result["_body"]).username)
              this.router.navigate(['/home']);
            }
            else {
              localStorage.setItem("user", JSON.parse(result["_body"]).username)
              this.router.navigate(['/admin-allcourses']);
            }
          }

        },
        (err) => {
          console.log(err);
        }
      )
    } else {
      alert("Please fill all details");
    }
  }
}
