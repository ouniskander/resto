import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientdataService } from 'src/app/clientdata.service';
import { DatacommandeService } from 'src/app/datacommande.service';
import { LivreurdataService } from 'src/app/livreur.service';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier : any;
  menus : any;
  totalcart : number =0;
  hide : boolean =false;
  address : string='';
  phone : string='';
  zip : string='';
  constructor(public data: PanierService,private client: ClientdataService,private commande: DatacommandeService,
    private router: Router,private liv:LivreurdataService) { }


  ngOnInit(): void {
    this.loadData();
  }
  removeItem(a:any) {
    this.data.delete(a._id).subscribe((res)=> {
      this.loadData();
    })
  }

  updateItem(a:any,event:any) {
    console.log(event.target.value);
    this.data.update(a._id,{quantity:event.target.value,total:a.menu.prix*event.target.value}).subscribe((res) => {
      this.loadData()
    })
  }

  onClickCheckout() {
    this.hide= true;
  }

  Commander() {
    this.commande.create({
      client:this.client.Payload,
      menu : this.menus,
      adresse: this.address,
      prix: this.totalcart,
      phone: this.phone,
      zip: this.zip,
      status: 'Posted',
    }).subscribe((res:any)=> {
      this.liv.sendmaillivreur({
        emailto:"ikramchaib2512@gmail.com",
        content:"vous avez recevez un email de livraison de la commande "
      +res._id+" de client "+this.client.Payload.name + " "
      +this.client.Payload.lastname + " avec le numero "+res.phone + ", adresse: "+ this.address})
      .subscribe((res)=> {
        console.log(res);
      })
      this.router.navigate(['/mescommandes']);
    })
  }

  loadData() {
    this.totalcart=0;
    this.menus=[];
    this.data.getall(this.client.Payload._id).subscribe((res)=> {
      this.panier=res;
      this.panier.forEach((element:any) => {
        this.totalcart+=element.total as number
        this.menus.push(element.menu);
      });
    })
  }
}
