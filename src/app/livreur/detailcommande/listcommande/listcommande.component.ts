import { Component, OnInit } from '@angular/core';
import { DatamenuService } from 'src/app/datamenu.service';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent implements OnInit {

  menus: any;
  searchText: any;
  constructor( public data: DatamenuService ) { }

  ngOnInit(): void {

    this.data.getall().subscribe(
      res=>{
        this.menus = res;


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
