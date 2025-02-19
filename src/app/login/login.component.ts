import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
login = new FormControl('',Validators.required);
pwd = new FormControl('',Validators.required);
loginForm=new FormGroup(
  {
    name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    cin:new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    adress:new FormControl('',Validators.required)
  }
)
save(){
  console.log(this.login);
  console.log(this.pwd);

}
}
