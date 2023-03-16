import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

email:string='';
password:string='';


constructor(private auth: AuthService,private router:Router){}


ngOnInit(): void {

}


login(){
if(this.email == ''){
  alert('please enter email');
  return;
}
if(this.password==''){
alert('please enter password');
return;
}
this.auth.login(this.email,this.password)
this.email='';
this.password='';

}

gotoSignup(){
this.router.navigate(['register']);
}

}
