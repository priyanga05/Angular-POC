import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
register:any="";
 myform: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
     firstname : ["",Validators.required],
     lastname : ["",Validators.required],
      email : ["",Validators.required],
      password : ["",Validators.required],
     // Cpassword : ["",Validators.required], 
     dob : ["",Validators.required],
      phoneno : ["",Validators.required],
      height : ["",Validators.required],
    weight : ["",Validators.required],
      gender : ["",Validators.required]
    });
  }
  onSubmit(myform){
   console.log(myform.value);
  }
}
