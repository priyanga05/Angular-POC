import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/parent';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
reg:boolean=false;
educationform: FormGroup;
@Input() userValue:User;
@Output() sendValue=new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.userValue);
    this.educationform = this.fb.group({
      collegename :["",Validators.required],
      yearofcompletion :["",Validators.required],
      cgpa :["",Validators.required]
      
    });

    }
    Submit(educationform){
      console.log(this.educationform.value);
       this.userValue.child=this.educationform.value;
       this.sendValue.emit(this.userValue);
       console.log(this.userValue);
  }

}
