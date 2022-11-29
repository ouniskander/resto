import { Component, OnInit } from '@angular/core';
import { DatacommandeService } from 'src/app/datacommande.service';
@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.css']
})
export class DetailcommandeComponent implements OnInit {

  commandes: any;
  searchText: any;
  constructor( public data: DatacommandeService ) { }

  ngOnInit(): void {
/*
    this.data.getall().subscribe(
      res=>{
        this.commandes = res;


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
*/
  }


}
