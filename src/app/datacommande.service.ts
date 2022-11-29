import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatacommandeService {


  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:4000/commande/';


  create(comm : any){
    return this.http.post(this.url + 'addcommande' , comm );
  }


  getall(id:any){
    return this.http.get(this.url + 'allcommande/'+ id );
  }
  getallcmd(){
    return this.http.get(this.url + 'allcmd/' );
  }

  delete(id: any){
    return this.http.delete(this.url + 'deletecommande/' + id );
  }

  getbyid(id: any){
    return this.http.get(this.url + 'byidcommande/' + id );
  }


  update(id: any, comm : any){
    return this.http.put(this.url + 'updatecommande/' + id ,comm );
  }
}
