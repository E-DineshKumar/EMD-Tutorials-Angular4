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
  constructor(private nodeService: NodeService, private router: Router) { }

  ngOnInit() {
    this.nodeService.home().subscribe((result) => {
      console.log("res", result);
      if (JSON.parse(result["_body"]).message == "loggedinwithsession")
        this.router.navigate(['/home']);
    },
      err => {
        console.log("err", err)
      })
  }
  onLogin() {
    if (this.email != undefined && this.password != undefined) {
      this.nodeService.login(this.email, this.password).subscribe(
        (result) => {
          console.log(result);
          if (JSON.parse(result["_body"]).message == "loggedin") {
            if (JSON.parse(result["_body"]).username != "admin")
              this.router.navigate(['/home']);
            else
              this.router.navigate(['/admin-allcourses']);
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
