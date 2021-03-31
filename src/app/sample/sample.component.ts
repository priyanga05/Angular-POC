import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
register:any="";
  constructor() { }

  ngOnInit(): void {
  }
  submit(myform){
    console.log(myform);
    console.log(myform.value);
  }
}
