import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/parent';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
register:any="";
 myform: FormGroup;
 reg=true;
 edu=false;
 details=false;
 userdetails = new User();
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
     firstname : ["",Validators.required],
     lastname : ["",Validators.required],
      email : ["",Validators.required],
      password : ["",[Validators.required,Validators.minLength(8)]],
     // Cpassword : ["",Validators.required], 
     dob : ["",Validators.required],
      phoneno : ["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      height : ["",Validators.required],
    weight : ["",Validators.required],
      gender : ["",Validators.required]
    });
  }
  onSubmit(){
    this.userdetails=this.myform.value;
   console.log(this.myform.value);
   this.reg=false;
    this.edu=true;
  }
  getDetails(data:User){
this.userdetails=data;
console.log(data);
this.details=true;
this.edu=false;
  }
}
