/*
Component is doing the work of a service. 
This is a temperary solution to save uploaded images localy.
Once the game flow is set, and Angular2 is released, images will be hosted elsewhere.
*/

import { Component } from '@angular/core';
import { environment } from '../environment';

@Component({
	moduleId: module.id,
	selector: 'app-uploadimage',
	template: `
        <input type="file" accept="image/*" (change)="fileChangeEvent($event)" placeholder="Upload file..." />
        <button type="button" (click)="upload()">Upload</button>
	`,
	styleUrls: ['uploadimage.component.css']
})

export class UploadimageComponent {
    url: string;
	filesToUpload: Array<File>;
 
    constructor() {
        this.filesToUpload = [];
        this.url = environment.production ? 'https://photorecall.herokuapp.com/upload' : 'http://localhost:3000/upload';
    }
 
    upload() {
        this.makeFileRequest(this.url, [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
 
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("newImage", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            // add the auth token and salt to the header
            xhr.setRequestHeader("X-Authorization", localStorage.getItem('token'));
            xhr.setRequestHeader("X-Salt", localStorage.getItem('salt'));
            xhr.send(formData);
        });
    }

}



