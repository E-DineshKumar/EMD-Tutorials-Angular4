import { Injectable } from '@angular/core';
import { Http ,Response, Headers} from '@angular/http';
import { RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class NodeService {

  constructor(public http : Http) { }

  login(email,password){
    var data = {"email" : email, "password" : password };

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post('http://localhost:3000/login',body,options);
  }
  signup(name,email,password,mobile){
    var data = {"name" : name, "email" : email, "password" : password, "mobile" : mobile};
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post('http://localhost:3000/signup',body,options);
  }
}
