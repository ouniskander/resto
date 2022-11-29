import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatamenuService } from 'src/app/datamenu.service';

@Component({
  selector: 'app-detailmenu',
  templateUrl: './detailmenu.component.html',
  styleUrls: ['./detailmenu.component.css']
})
export class DetailmenuComponent implements OnInit {

  id: any;
  menu: any;
  
  constructor(
    private actRoute: ActivatedRoute,
    private data: DatamenuService
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

    );


  }

}
