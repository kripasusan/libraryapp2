import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../signup/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title : String = "Login";
 user = new UserModel('','','','');
  constructor(private _authService: AuthService, private _router: Router) { }
  
  ngOnInit(): void {
  }
  //user:any
  loginUser(){
    localStorage.setItem("UserEmail", this.user.email);
    this._authService.loginUser(this.user)
    .subscribe((res)=>{
      localStorage.setItem('token', res.token);
      sessionStorage.setItem("user", this.user.email);
      this._router.navigate(['/books']);
    }
    );
  }
}
