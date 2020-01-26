
import { Component, OnInit ,ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators ,FormsModule,NgForm } from "@angular/forms";
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-myform1',
  templateUrl: './myform1.component.html',
  styleUrls: ['./myform1.component.scss']
})
export class Myform1Component  {

  regiForm: FormGroup;
  Gender:string='';  
  FirstName:string='';  
  LastName:string='';
  Email:string=''; 
  passwor:string='';
  confirmPassword:string='';  
  Language:string='';   
  Address:string='';   
  IsAccepted:number=0; 

  constructor(public fb: FormBuilder) {
    this.regiForm = fb.group({
      'Gender':[null, Validators.required],  
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required], 
      'Email':[null, Validators.compose([Validators.required,Validators.email])], 
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPassword': ['', Validators.required],   
      'Language':[null, Validators.required],
      'Address':[null,Validators.required],   
      'IsAccepted':[null]  
    });  
  }

  

  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  
    


}