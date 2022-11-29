import { Component, OnInit } from '@angular/core';
import { DatalistclientService } from 'src/app/datalistclient.service';
@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

  listclients: any;
  searchText: any;

  constructor( public data: DatalistclientService ) { }

  ngOnInit(): void {
/*
    this.data.allclients().subscribe(
      res=>{
        this.listclients = res;


      },
      err=>{
        console.log(err);

      }
    );

  }

  delete(id: any){

    this.data.deleteclient(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    );

  }*/

}
}
