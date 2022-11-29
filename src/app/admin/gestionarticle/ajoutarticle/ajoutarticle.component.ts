import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataarticleService } from 'src/app/dataarticle.service';

@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  myFile : any;

  article = {

    titre: '',
    description: '',
    content: ''

  }
  constructor(
    private data: DataarticleService,
    private router: Router
    ) { }
  ngOnInit(): void {
  }

  selected(e:any){
    this.myFile = e.target.files[0];
  }


  ajout(){

    let fd = new FormData();
    fd.append('titre' , this.article.titre );
    fd.append('description' , this.article.description );
    fd.append('content' , this.article.content );
    fd.append('image' , this.myFile);

    this.data.create(fd).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/admin/article']);
      },
      (err)=>{
        console.log(err);
        
      }
    );

  }

}
