import { Component, OnInit } from '@angular/core';
import { DataarticleService } from 'src/app/dataarticle.service';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {

  articles: any;
  searchText: any;

  constructor( public data: DataarticleService ) { }

  ngOnInit(): void {

    this.data.getall().subscribe(
      res=>{
        this.articles = res;


      },
      err=>{
        console.log(err);

      }
    );

  }

  delete(id: any){

    this.data.delete(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    );

  }


}
