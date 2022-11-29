import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DatamenuService } from 'src/app/datamenu.service';

@Component({
  selector: 'app-ajoutmenu',
  templateUrl: './ajoutmenu.component.html',
  styleUrls: ['./ajoutmenu.component.css']
})
export class AjoutmenuComponent implements OnInit {

  myFile : any;

  menu = {

    titre: '',
    description: '',
    prix: '',
    calories:'',
    weight:'',

  }
  constructor(
    private data: DatamenuService,
    private router: Router
    ) { }
  ngOnInit(): void {
  }

  selected(e:any){
    this.myFile = e.target.files[0];
  }


  ajout(){

    let fd = new FormData();
    fd.append('titre' , this.menu.titre );
    fd.append('description' , this.menu.description );
    fd.append('prix' , this.menu.prix );
    fd.append('calories' , this.menu.calories );
    fd.append('weight' , this.menu.weight );

    fd.append('image' , this.myFile);

    this.data.create(fd).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/admin']);
      },
      (err)=>{
        console.log(err);
        
      }
    );

  }
}
