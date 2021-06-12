import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

loginUser(user:any){
  return this.http.post<any>("http://localhost:3000/login",user);

}
  
  
  rolesVerify(){
    let admin = sessionStorage.getItem("UserEmail");
    if(admin === 'admin@gmail.com'){
      return true;
    }
    else{
      return false;
    }

  }


  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}

