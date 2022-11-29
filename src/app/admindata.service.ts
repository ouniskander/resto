import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:4000/admin/';


  register(admin: any){

    return this.http.post(this.url + 'register' , admin);

  }


  login(admin: any){

    return this.http.post(this.url + 'login' , admin);

  }


  isLoggedIn(){

    let token = localStorage.getItem('tokenpizza');
    if(token){
      return true;
    }else{
      return false;
    }

  }

}
