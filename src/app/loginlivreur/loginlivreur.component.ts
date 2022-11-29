import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientdataService } from '../clientdata.service';
import { LivreurdataService } from '../livreur.service';

@Component({
  selector: 'app-loginlivreur',
  templateUrl: './loginlivreur.component.html',
  styleUrls: ['./loginlivreur.component.css']
})
export class LoginlivreurComponent implements OnInit {

  livreurLogin = {
    email:'',
    password:''
  }

  token: any
  login(){
    this.data.login(this.livreurLogin).subscribe(
      (res:any)=>{
        console.log(res);
        this.token = res;
        localStorage.removeItem('tokenpizza');
        localStorage.removeItem('role');
        localStorage.setItem('tokenpizza' , this.token.mytoken );
        localStorage.setItem('role' , 'livreur' );
        this.router.navigate(['/']);

      },
      (err:any)=>{
        console.log(err);

      }
    );

  }


  constructor(private data: LivreurdataService, private router: Router) { }

  ngOnInit(): void {
  }

}
