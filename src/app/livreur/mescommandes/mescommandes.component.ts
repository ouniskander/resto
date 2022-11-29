import { Component, OnInit } from '@angular/core';
import { ClientdataService } from 'src/app/clientdata.service';
import { DatacommandeService } from 'src/app/datacommande.service';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {

  commandes : any

  constructor(private commande: DatacommandeService,private client:ClientdataService) { }

  
  ngOnInit(): void {
    this.loadData()
    
  }
  onClickAnnulled(c:any) {
    this.commande.update(c._id, {status :'Annulled'}).subscribe((res)=> {
      this.loadData()
    })
  }

  loadData() {
    this.commande.getall(this.client.Payload._id).subscribe((res)=> {
      this.commandes = res;
    })
  }
}
