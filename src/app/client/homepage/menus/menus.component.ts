import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientdataService } from 'src/app/clientdata.service';
import { DatamenuService } from 'src/app/datamenu.service';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menus :any;


  constructor( private data: DatamenuService,private panier :PanierService, private client: ClientdataService,private router: Router ) { }

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
  addPanier(item:any) {
    console.log(item);
    let data = {
      menu : item,
      client: this.client.Payload,
      total: item.prix*1,
      quantity: 1
    };
    this.panier.create(data).subscribe((res)=> {
      this.router.navigate(['/panier']);
    })
    
  }

}
