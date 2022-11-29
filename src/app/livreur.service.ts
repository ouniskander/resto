import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LivreurdataService {

  constructor(private http: HttpClient,private router:Router) { }

  private url = 'http://127.0.0.1:4000/livreur/';


  register(livreur: any){

    return this.http.post(this.url + 'registerlivreur' , livreur);

  }
  
  sendmaillivreur(body: any){

    return this.http.post(this.url + 'sendmaillivreur' , body);

  }


  login(livreur: any){

    return this.http.post(this.url + 'loginlivreur' , livreur);

  }



  logout() {
    localStorage.removeItem('tokenpizza')
    localStorage.removeItem('role')
    this.router.navigateByUrl('/');
  }

  isLoggedIn(){

    let token = localStorage.getItem('tokenpizza');
    if(token){
      return true;
    }else{
      return false;
    }
  }

  get Role(){
    return localStorage.getItem('role');
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
