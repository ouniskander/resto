import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {

  constructor(private route: Router) { }
  logout(){

    localStorage.removeItem('tokenpizza');

    this.route.navigate(['/login']);

  }
  ngOnInit(): void {
  }

}
