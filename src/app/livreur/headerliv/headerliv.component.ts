import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-headerliv',
  templateUrl: './headerliv.component.html',
  styleUrls: ['./headerliv.component.css']
})
export class HeaderlivComponent implements OnInit {

  constructor( private router: Router ) { }

  logout(){

    localStorage.removeItem('tokenpizza');

    this.router.navigate(['/login']);

  }


  ngOnInit(): void {
  }

}
