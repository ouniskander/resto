import { Component, OnInit } from '@angular/core';
import { ClientdataService } from 'src/app/clientdata.service';
import { DatacommandeService } from 'src/app/datacommande.service';
import { LivreurdataService } from 'src/app/livreur.service';

@Component({
  selector: 'app-commandelists',
  templateUrl: './commandelists.component.html',
  styleUrls: ['./commandelists.component.css']
})
export class CommandelistsComponent implements OnInit {


  commandes : any

  constructor(private commande: DatacommandeService,private liv:LivreurdataService) { }


  ngOnInit(): void {
    this.loadData()

  }
  onClickDelivered(c:any) {
    this.commande.update(c._id, {status :'Delivered'}).subscribe((res)=> {
      this.liv.sendmaillivreur({
        emailto:c.client.email,
        content: 'votre commande a ete delivrée par '+this.liv.Payload.name+' '+this.liv.Payload.lastname
      }).subscribe((res)=>{});
      this.loadData()
    })
  }

  loadData() {
    this.commande.getallcmd().subscribe((res)=> {
      this.commandes = res;
      console.log(res);

    })
  }

}
