import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RequestOptions, URLSearchParams, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';

@Component({
    selector: 'app-createnew',
    templateUrl: './createnew.component.html',
    styleUrls: ['./createnew.component.css']
})
export class CreatenewComponent implements OnInit {
    course_id: String;
    course_name: String;

    constructor(public http: Http,private router: Router) {
        this.course_id = "";
        this.course_name = "";

    }


    ngOnInit() {

    }
    // public uploader:FileUploader = new FileUploader({
    //     url:'http://localhost:3000/createNew'     

    // });
    // uploadAll(){
    // this.uploader.onBuildItemForm = (item, form) => {
    //     form.append("course_id", this.course_id);
    //     form.append("course_name", this.course_name);
    //     console.log(form);
    //   };
    // }
    public file: File;
    onFileChange(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {

            let fileSize: number = fileList[0].size;
            if (fileSize <= 10485760) {
                this.file = fileList[0];
            }
        }
    }
    onUpload(event) {
        // let fileList: FileList = event.target.files;
        // if (fileList.length > 0) {
        //     let file: File = fileList[0];
        let formData: FormData = new FormData();
        formData.append("courseId", this.course_id.toString());
        formData.append("courseName", this.course_name.toString());
        formData.append('pic', this.file);

        console.log(formData.get("pic"));
        /** In Angular 5, including the header Content-Type can invalidate your request */
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        this.http.post('http://localhost:3000/createNew', formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => {
                    console.log('success');
                    alert(JSON.parse(data)["message"]);
                    this.router.navigate(['/admin-allcourses']);

                },
                error => alert(error)
            )
    }
}


