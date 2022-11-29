import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataarticleService } from 'src/app/dataarticle.service';
@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  myFile : any;
  image_modify=false

  article: any = {
    titre: '',
    description: '',
    content: '',
    image:''
  }

  id: any;
  constructor(
    private data: DataarticleService,
    private router: Router,
    private actRoute: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.data.getbyid(this.id).subscribe(
      res=>{
        this.article = res;
      },
      err=>{
        console.log(err);

      }
    )

  }

  selected(e:any){
    this.image_modify=true
    this.myFile = e.target.files[0];
  }


  update(){

    let fd = new FormData();
    fd.append('titre' , this.article.titre );
    fd.append('description' , this.article.description );
    fd.append('content' , this.article.content );
    if(this.image_modify){

      fd.append('image' , this.myFile);

    }

    if(!this.image_modify){
      console.log('222222');

      this.data.update2(this.id, fd).subscribe(
        (res)=>{
          this.router.navigate(['/admin/article']);
        },
        (err)=>{
          console.log(err);

        }
      );
      }
    else{
      console.log('11111');

      this.data.update(this.id, fd).subscribe(
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
}
