import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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




  isLoggedIn(){

    let token = localStorage.getItem('tokenpizza');
    if(token){
      return true;
    }else{
      return false;
    }

  }

}
