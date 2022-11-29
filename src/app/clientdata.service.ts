import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class ClientdataService {

  constructor(private http: HttpClient,private router:Router) { }
  private url = 'http://127.0.0.1:4000/client/';


  register(client: any){

    return this.http.post(this.url + 'registerclient' , client);

  }

  login(client: any){

    return this.http.post(this.url + 'loginclient' , client);

  }

  delete(id: any){
    return this.http.delete(this.url + 'deleteclient/' + id );
  }

  getbyid(id: any){
    return this.http.get(this.url + 'byidclient/' + id );
  }


  update(id: any, client : any){
    return this.http.put(this.url + 'updateclient/' + id ,  client);
  }

  logout() {
    localStorage.removeItem('tokenpizza')
    localStorage.removeItem('role')
    this.router.navigateByUrl('/');
  }

  get Role(){
    return localStorage.getItem('role');
  }

  isLoggedIn(){

    let token = localStorage.getItem('tokenpizza');
    if(token){
      return true;
    }else{
      return false;
    }
  }

  get Token(){
    return localStorage.getItem('tokenpizza');
  }

  get Payload() : any {
    const token = this.Token;
    if(token){
      return jwt_decode(token);
    }
    return null;
  }

}

