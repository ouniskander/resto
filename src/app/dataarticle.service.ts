import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataarticleService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:4000/article/';


  create(art : any){
    return this.http.post(this.url + 'add' , art );
  }


  getall(){
    return this.http.get(this.url + 'all' );
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
  update2(id: any, art : any){
    return this.http.put(this.url + 'update/' + id ,  art);
  }
}
