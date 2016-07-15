/// <reference path="./filepicker.d.ts" />

import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

import * as filepicker from 'filepicker';

@Component({
	moduleId: module.id,
	selector: 'app-filestack',
	templateUrl: 'filestack.component.html',
	styleUrls: ['filestack.component.css']
})

export class FilestackComponent implements OnInit, AfterViewInit {
	private _fp = filepicker;

	constructor(private elementRef:ElementRef) {}

	ngOnInit() {
		console.log(filepicker)
	}

	ngAfterViewInit() {
		var s = document.createElement("script");
  		s.type = "text/javascript";
  		s.src = "https://api.filestackapi.com/filestack.js";
  		this.elementRef.nativeElement.appendChild(s);

  		var i = document.createElement("input");
  		var key = document.createAttribute("data-fp-apikey");
  		var change = document.createAttribute("onchange");
  		key.value = "A3cvs2jDCQB6TQyUrDbBwz";
  		change.value = "alert(event.fpfile.url)";

  		i.type = "filepicker";
  		i.setAttributeNode(key);
  		i.setAttributeNode(change);

  		this.elementRef.nativeElement.appendChild(i);
	}
}
