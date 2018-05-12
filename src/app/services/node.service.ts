import { Injectable } from '@angular/core';
import { Http ,Response, Headers} from '@angular/http';
import { RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class NodeService {
  baseUrl : string = "http://localhost:3000/";
  constructor(public http : Http) { }

  login(email,password){
    var data = {"email" : email, "password" : password };
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers,withCredentials: true});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl+'login',body,options);
  }
  signup(name,email,password,mobile){
    var data = {"name" : name, "email" : email, "password" : password, "mobile" : mobile};
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl+'signup',body,options);
  }
  home(){
    let options = new RequestOptions({withCredentials: true});
    return this.http.get(this.baseUrl+"home", options)
  }
  updateCourse(course_id,course_name,section,content){
    var data = {"courseId" : course_id, "courseName" : course_name, "topicName" : section, "courseData" : content};
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers,withCredentials: true});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl+'addCourseData',body,options);
  }
  logout(){
    let options = new RequestOptions({withCredentials: true});
    return this.http.get(this.baseUrl+"logout", options)
  }
  deleteCourse(course_name){
    var data = {"coursename" : course_name};
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers,withCredentials: true});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl+'deleteCourse',body,options);
  }
  getSections(course_name){
    var data = {"coursename" : course_name};
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers,withCredentials: true});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl+'course/'+course_name,body,options);
  }
  getSectionData(course_name,section){
    var data = {"courseName" : course_name,"section":section};
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers,withCredentials: true});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl+'course/'+course_name+'/'+section,body,options);
  }
  updateSection(course_name,topicName,content){
    var data = {"courseName" : course_name, "topicName" : topicName, "courseData" : content};
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers,withCredentials: true});
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl+'update-section',body,options);
  }
  session(){
    let options = new RequestOptions({withCredentials: true});
    return this.http.get(this.baseUrl, options)
  }
}
