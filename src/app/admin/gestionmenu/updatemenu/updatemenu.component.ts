import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatamenuService } from 'src/app/datamenu.service';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdatemenuComponent implements OnInit {

  myFile : any;

  menu: any = {

    titre: '',
    description: '',
    content: ''

  }

  id: any;
  constructor(
    private data: DatamenuService,
    private router: Router,
    private actRoute: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.data.getbyid(this.id).subscribe(
      res=>{
        this.menu = res;
      },
      err=>{
        console.log(err);
        
      }
    )

  }

  selected(e:any){
    this.myFile = e.target.files[0];
  }


  update(){

    let fd = new FormData();
    fd.append('titre' , this.menu.titre );
    fd.append('description' , this.menu.description );
    fd.append('prix' , this.menu.prix );
    fd.append('calories' , this.menu.calories );
    fd.append('weight' , this.menu.weight );

    fd.append('image' , this.myFile);

    this.data.update(this.id, fd).subscribe(
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
