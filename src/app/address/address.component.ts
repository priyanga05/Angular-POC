import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from '../models/parent';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
addressform: FormGroup;
@Input() finalValue:User;
@Output() addrs=new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addressform = this.fb.group({
      addressline1 :["",Validators.required],
      addressline2 :["",Validators.required],
      city :["",Validators.required],
      state :["",Validators.required]
    });
  }
  Submit(){
    console.log(this.addressform.value);
    this.finalValue.address=this.addressform.value;
    this.addrs.emit(this.finalValue);
  }


}
