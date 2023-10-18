import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform:FormGroup = new FormGroup({
    name:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null),
    repassword:new FormControl(null),
    phone:new FormControl(null),
  })

  submitregister(formdata:FormGroup){
    console.log(formdata);
    
  }

  }