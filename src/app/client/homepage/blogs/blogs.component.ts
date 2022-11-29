import { Component, OnInit } from '@angular/core';
import { DataarticleService } from 'src/app/dataarticle.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {


  blogs : any;

  constructor( private data: DataarticleService ) { }

  ngOnInit(): void {

    this.data.getall().subscribe(
      res=>{
        this.blogs = res;
      },
      err=>{
        console.log(err);
        
      }
    );

  }

}
