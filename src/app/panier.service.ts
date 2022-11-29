import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:4000/panier/';
  
  create(art : any){
    return this.http.post(this.url + 'add' , art );
  }


  getall(id:any){
    return this.http.get(this.url + 'all/'+id );
  }
  
  delete(id: any){
    return this.http.delete(this.url + 'delete/' + id );
  }

  getbyid(id: any){
    return this.http.get(this.url + 'byid/' + id );
  }


  update(id: any, art : any){
    return this.http.put(this.url + 'update/' + id ,  art);
  }
}
